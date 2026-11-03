'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';

import { Button, Radio, RadioGroup, TextField } from '@berrypjh/react-ui';

import { type FailureStageId, failureStages } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';

import {
  emptyText,
  formatRecord,
  type RecordFields,
  recordLabels,
  type RequiredKey,
  type TextKey,
  validateRecord,
} from './recordText';

const strings = {
  ko: {
    intro:
      '* 표시는 필수 항목입니다. 입력한 내용은 서버로 보내거나 브라우저에 저장하지 않으므로 페이지를 새로 고치거나 떠나면 사라집니다. 다 쓴 기록은 복사해 문서나 이슈 트래커에 붙여 넣으세요.',
    hints: {
      user: '예: 키보드만 사용, 화면 낭독기 사용',
      task: '예: 예약 날짜를 5월 20일로 바꾸고 확정하기',
      environment: '예: macOS 15 · Safari 18, 창 폭 1280px, 확대 100%, 키보드 탐색 켬',
      method: '예: 키보드(Tab · Enter · Space), 화면 낭독기 이름과 버전, 음성 입력',
      expected: '예: "변경 확정"에 포커스가 가고 Enter로 확정할 수 있음',
      actual: '예: 오류일 때 테두리 색만 바뀌고 글자 안내가 없음',
      impact: '예: 예약 변경을 끝낼 수 없어 전화로 처리해야 함',
      recovery: '예: 우회 경로 없음, 다른 사람의 도움이 필요함',
      unknowns: '예: 모바일 화면 낭독기에서는 확인하지 않음',
    } satisfies Partial<Record<TextKey, string>>,
    stepsLegend: '재현 절차',
    stepsHint: '다른 사람이 그대로 따라 할 수 있게 한 단계씩 적습니다.',
    step: (n: number) => `단계 ${n}`,
    removeStep: (n: number) => `단계 ${n} 삭제`,
    addStep: '단계 추가',
    stepRemoved: (n: number) => `단계 ${n} 칸을 삭제했습니다.`,
    errors: {
      task: '과업을 입력하세요.',
      steps: '재현 절차를 한 단계 이상 입력하세요.',
      expected: '기대 결과를 입력하세요.',
      actual: '실제 결과를 입력하세요.',
      stage: '실패 단계를 하나 고르세요.',
    } satisfies Record<RequiredKey, string>,
    errorPrefix: '오류: ',
    summaryTitle: (n: number) => `기록에 빠진 필수 항목이 ${n}개 있습니다`,
    submit: '빠진 항목 확인 후 복사',
    clear: '모두 지우기',
    clearQuestion: '입력한 내용을 모두 지울까요? 저장되지 않으므로 되돌릴 수 없습니다.',
    clearConfirm: '지우기',
    clearCancel: '취소',
    cleared: '입력한 내용을 모두 지웠습니다.',
    previewHeading: '기록 미리보기',
    previewLabel: '기록 텍스트 (읽기 전용)',
    copied: '기록을 클립보드에 복사했습니다.',
    copyFailed:
      '복사하지 못했습니다. 미리보기 칸의 텍스트를 선택해 두었으니 직접 복사하세요(Ctrl+C 또는 Command+C).',
  },
  en: {
    intro:
      'Fields marked * are required. This form does not send your input to a server or store it in the browser. It disappears when you reload or leave the page, so copy the finished record into a document or issue tracker.',
    hints: {
      user: 'e.g. keyboard only, screen reader user',
      task: 'e.g. change the appointment to May 20 and confirm',
      environment: 'e.g. macOS 15 · Safari 18, 1280px window, 100% zoom, keyboard navigation on',
      method: 'e.g. keyboard (Tab, Enter, Space), screen reader name and version, speech input',
      expected: 'e.g. focus reaches "Confirm change" and Enter confirms it',
      actual: 'e.g. on error only the border color changes, with no text',
      impact: 'e.g. cannot finish rebooking and has to call instead',
      recovery: 'e.g. no workaround; needs someone else’s help',
      unknowns: 'e.g. not checked with a mobile screen reader',
    } satisfies Partial<Record<TextKey, string>>,
    stepsLegend: 'Steps to reproduce',
    stepsHint: 'One step at a time, so someone else can follow exactly.',
    step: (n: number) => `Step ${n}`,
    removeStep: (n: number) => `Remove step ${n}`,
    addStep: 'Add step',
    stepRemoved: (n: number) => `Removed step ${n}.`,
    errors: {
      task: 'Enter the task.',
      steps: 'Enter at least one step to reproduce.',
      expected: 'Enter the expected result.',
      actual: 'Enter the actual result.',
      stage: 'Choose a failure stage.',
    } satisfies Record<RequiredKey, string>,
    errorPrefix: 'Error: ',
    summaryTitle: (n: number) =>
      `${n} required ${n === 1 ? 'field is' : 'fields are'} missing from the record`,
    submit: 'Check and copy',
    clear: 'Clear all',
    clearQuestion: 'Clear everything you entered? Nothing is saved, so this cannot be undone.',
    clearConfirm: 'Clear',
    clearCancel: 'Cancel',
    cleared: 'Everything you entered was cleared.',
    previewHeading: 'Record preview',
    previewLabel: 'Record text (read-only)',
    copied: 'Record copied to the clipboard.',
    copyFailed:
      'Could not copy. The text in the preview field is selected; copy it yourself (Ctrl+C or Command+C).',
  },
};

type Step = { id: number; text: string };

const textFields: { key: TextKey; required?: boolean }[] = [
  { key: 'user' },
  { key: 'task', required: true },
  { key: 'environment' },
  { key: 'method' },
];

const resultFields: { key: TextKey; required?: boolean }[] = [
  { key: 'expected', required: true },
  { key: 'actual', required: true },
];

const afterStageFields: TextKey[] = ['impact', 'recovery', 'unknowns'];

type TextValues = Record<TextKey, string>;

/** 01.5의 장벽 재현 기록 작성 양식. 입력은 이 컴포넌트 상태에만 있고 저장하지 않는다. */
export const RecordForm = () => {
  const { locale } = useLocale();
  const t = strings[locale];
  const labels = recordLabels[locale];
  const id = useId();
  const fieldId = (key: string) => `${id}-${key}`;

  const [text, setText] = useState<TextValues>(emptyText);
  const [steps, setSteps] = useState<Step[]>([{ id: 0, text: '' }]);
  const [stage, setStage] = useState<FailureStageId | ''>('');
  const [attempts, setAttempts] = useState(0);
  const [confirming, setConfirming] = useState(false);
  const [status, setStatus] = useState({ text: '', n: 0 });
  const [focusRequest, setFocusRequest] = useState<{ target: string } | null>(null);
  const nextStepId = useRef(1);
  const previewRef = useRef<HTMLTextAreaElement>(null);

  const record: RecordFields = { ...text, steps: steps.map((step) => step.text), stage };
  const missing = attempts > 0 ? validateRecord(record) : [];
  const errorOf = (key: RequiredKey) => (missing.includes(key) ? t.errors[key] : undefined);

  /** 포커스 요청마다 새 객체를 넣어, 같은 대상을 다시 요청해도 렌더 뒤에 한 번씩 옮긴다. */
  useEffect(() => {
    if (focusRequest) document.getElementById(focusRequest.target)?.focus();
  }, [focusRequest]);

  const requestFocus = (key: string) => setFocusRequest({ target: fieldId(key) });

  /** 같은 문구도 다시 알리도록 상태 메시지 노드를 매번 바꾼다. 빈 문자열은 알림 없이 지운다. */
  const announce = (text: string) => setStatus((prev) => ({ text, n: prev.n + 1 }));

  const focusTarget = (key: RequiredKey) =>
    key === 'steps'
      ? fieldId(`step-${steps[0].id}`)
      : fieldId(key === 'stage' ? 'stage-group' : key);

  const focusField = (key: RequiredKey) => {
    const target = document.getElementById(focusTarget(key));
    (key === 'stage' ? target?.querySelector('input') : target)?.focus();
  };

  const edit = (key: TextKey, value: string) => {
    setText((prev) => ({ ...prev, [key]: value }));
    announce('');
  };

  const editStep = (stepId: number, value: string) => {
    setSteps((prev) => prev.map((step) => (step.id === stepId ? { ...step, text: value } : step)));
    announce('');
  };

  const addStep = () => {
    const newId = nextStepId.current++;
    setSteps((prev) => [...prev, { id: newId, text: '' }]);
    requestFocus(`step-${newId}`);
  };

  const removeStep = (index: number) => {
    const target = steps[index - 1] ?? steps[index + 1];
    setSteps((prev) => prev.filter((_, i) => i !== index));
    requestFocus(`step-${target.id}`);
    announce(t.stepRemoved(index + 1));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAttempts((count) => count + 1);
    if (validateRecord(record).length > 0) {
      announce('');
      requestFocus('summary');
      return;
    }
    try {
      await navigator.clipboard.writeText(formatRecord(record, locale));
      announce(t.copied);
    } catch {
      announce(t.copyFailed);
      previewRef.current?.focus();
      previewRef.current?.select();
    }
  };

  const startClear = () => {
    setConfirming(true);
    requestFocus('clear-cancel');
  };

  const cancelClear = () => {
    setConfirming(false);
    requestFocus('clear');
  };

  const clearAll = () => {
    setText(emptyText());
    setSteps([{ id: nextStepId.current++, text: '' }]);
    setStage('');
    setAttempts(0);
    setConfirming(false);
    announce(t.cleared);
    requestFocus('user');
  };

  const renderText = (key: TextKey, required = false, multiline = true) => {
    const error = required ? errorOf(key as RequiredKey) : undefined;
    return (
      <TextField
        key={key}
        id={fieldId(key)}
        label={labels[key]}
        required={required}
        multiline={multiline || undefined}
        rows={multiline ? 2 : undefined}
        value={text[key]}
        onChange={(e) => edit(key, e.target.value)}
        error={Boolean(error)}
        helperText={
          <>
            {t.hints[key]}
            {error && (
              <span className="block font-semiBold">
                {t.errorPrefix}
                {error}
              </span>
            )}
          </>
        }
        fullWidth
      />
    );
  };

  const stepsError = errorOf('steps');
  const stageError = errorOf('stage');

  return (
    <div className="my-xl flex flex-col gap-xl rounded-md border border-stroke-success p-lg">
      <p className="text-xsm text-text-light">{t.intro}</p>

      {missing.length > 0 && (
        <div
          id={fieldId('summary')}
          tabIndex={-1}
          role="group"
          aria-labelledby={fieldId('summary-title')}
          className="rounded-md border-2 border-stroke-error p-lg"
        >
          <p id={fieldId('summary-title')} className="mb-sm text-xsm font-bold text-text-error">
            {t.summaryTitle(missing.length)}
          </p>
          <ul className="flex list-disc flex-col gap-2xs pl-lg text-xsm">
            {missing.map((key) => (
              <li key={key}>
                <a
                  href={`#${focusTarget(key)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    focusField(key);
                  }}
                >
                  {t.errors[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form noValidate onSubmit={submit} className="flex flex-col gap-lg">
        {textFields.map((field) => renderText(field.key, field.required, false))}

        <fieldset className="flex flex-col gap-sm">
          <legend className="mb-xs text-xsm font-semiBold text-text-default">
            {t.stepsLegend}
            <span aria-hidden="true"> *</span>
          </legend>
          <p className="text-xxsm text-text-light">{t.stepsHint}</p>
          <ol className="flex flex-col gap-sm">
            {steps.map((step, i) => (
              <li key={step.id} className="flex items-end gap-sm">
                <div className="min-w-0 flex-1">
                  <TextField
                    id={fieldId(`step-${step.id}`)}
                    label={t.step(i + 1)}
                    value={step.text}
                    onChange={(e) => editStep(step.id, e.target.value)}
                    required={i === 0}
                    error={Boolean(stepsError) && i === 0}
                    helperText={
                      stepsError && i === 0 ? (
                        <span className="font-semiBold">
                          {t.errorPrefix}
                          {stepsError}
                        </span>
                      ) : undefined
                    }
                    fullWidth
                  />
                </div>
                {steps.length > 1 && (
                  <Button type="button" variant="text" size="sm" onClick={() => removeStep(i)}>
                    {t.removeStep(i + 1)}
                  </Button>
                )}
              </li>
            ))}
          </ol>
          <div>
            <Button type="button" variant="outlined" size="sm" onClick={addStep}>
              {t.addStep}
            </Button>
          </div>
        </fieldset>

        {resultFields.map((field) => renderText(field.key, field.required))}

        <div id={fieldId('stage-group')}>
          <RadioGroup
            label={
              <>
                {labels.stage}
                <span aria-hidden="true"> *</span>
                {stageError && (
                  <span className="block text-xsm font-semiBold text-text-error">
                    {t.errorPrefix}
                    {stageError}
                  </span>
                )}
              </>
            }
            required
            error={Boolean(stageError)}
            value={stage}
            onValueChange={(value) => {
              setStage(value as FailureStageId);
              announce('');
            }}
          >
            {failureStages[locale].map((option) => (
              <Radio key={option.id} value={option.id}>
                <span>
                  <StageLabel locale={locale} id={option.id} className="font-semiBold" />
                  <span className="text-text-light"> — {option.detail}</span>
                </span>
              </Radio>
            ))}
          </RadioGroup>
        </div>

        {afterStageFields.map((key) => renderText(key))}

        <div className="flex flex-wrap items-center gap-md">
          <Button type="submit" variant="contained">
            {t.submit}
          </Button>
          <Button id={fieldId('clear')} type="button" variant="text" onClick={startClear}>
            {t.clear}
          </Button>
        </div>

        {confirming && (
          <div
            role="group"
            aria-labelledby={fieldId('clear-question')}
            className="flex flex-col gap-sm rounded-md border border-stroke-warning p-md"
          >
            <p id={fieldId('clear-question')} className="text-xsm">
              {t.clearQuestion}
            </p>
            <div className="flex flex-wrap gap-sm">
              <Button type="button" variant="contained" size="sm" onClick={clearAll}>
                {t.clearConfirm}
              </Button>
              <Button
                id={fieldId('clear-cancel')}
                type="button"
                variant="outlined"
                size="sm"
                onClick={cancelClear}
              >
                {t.clearCancel}
              </Button>
            </div>
          </div>
        )}

        <p role="status" className="text-xsm text-text-default">
          {status.text && <span key={status.n}>{status.text}</span>}
        </p>
      </form>

      <section aria-labelledby={fieldId('preview-heading')} className="flex flex-col gap-sm">
        <h3 id={fieldId('preview-heading')} className="text-md font-bold text-text-default">
          {t.previewHeading}
        </h3>
        <TextField
          label={t.previewLabel}
          multiline
          rows={14}
          readOnly
          value={formatRecord(record, locale)}
          inputRef={previewRef}
          fullWidth
        />
      </section>
    </div>
  );
};
