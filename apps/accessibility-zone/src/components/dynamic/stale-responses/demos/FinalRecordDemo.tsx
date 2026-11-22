'use client';

import { useLocale } from '@it-tech-blog/preferences';
import { DocTable, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { TextField } from '@berrypjh/react-ui';

import { compare, scenarios } from '../scenarios';

const recorded = ['reversal', 'late-after-cancel'];
const fields = ['order', 'ids', 'display', 'message', 'dom', 'focus', 'unconfirmed'] as const;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 실습에서 두 상황을 직접 재현하고, 상황마다 일곱 칸을 채운 뒤 모범 기록과 수정 전후 비교표를 대조하세요. 입력은 어디에도 보내지 않습니다.',
    labels: {
      order: '입력 순서',
      ids: '요청 ID와 활성 요청',
      display: '예상 표시 (결과 목록)',
      message: '예상 알림 원문',
      dom: '관찰된 DOM (status · aria-busy · 목록)',
      focus: '관찰된 초점',
      unconfirmed: '미확인 보조기술 항목',
    },
    reveal: '모범 기록 보기',
    caption: '모범 기록 (교육 예시)',
    head: ['칸', '기록'],
    none: '없음',
    model: (order: string, display: string, message: string, busy: boolean) => ({
      order,
      ids: '#1 = A “자막”, #2 = B “대본”. 마지막 사건 뒤 활성 요청 없음',
      display: display || '없음 (목록 비어 있음)',
      message,
      dom: `status 글자 “${message}”, aria-busy ${busy}, 늦은 응답 뒤에도 그대로`,
      focus: '마지막으로 누른 응답 버튼 그대로 (초점을 옮기지 않음)',
      unconfirmed:
        '실제 낭독 여부와 횟수. 화면 낭독기 · 브라우저 · 판 · 설정을 함께 적을 때만 확인',
    }),
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Reproduce both situations in the exercise above, fill in the seven fields for each, then compare with the model record and the before-and-after table. Nothing you type is sent anywhere.',
    labels: {
      order: 'Input order',
      ids: 'Request IDs and the active request',
      display: 'Expected display (result list)',
      message: 'Expected announcement text',
      dom: 'Observed DOM (status, aria-busy, list)',
      focus: 'Observed focus',
      unconfirmed: 'Unconfirmed assistive technology items',
    },
    reveal: 'Show the model record',
    caption: 'Model record (teaching example)',
    head: ['Field', 'Record'],
    none: 'None',
    model: (order: string, display: string, message: string, busy: boolean) => ({
      order,
      ids: '#1 = A “caption”, #2 = B “transcript”. No active request after the last event',
      display: display || 'None (empty list)',
      message,
      dom: `status text “${message}”, aria-busy ${busy}, unchanged after the late response`,
      focus: 'Stays on the response button pressed last (focus is not moved)',
      unconfirmed:
        'Whether and how many times it is spoken; confirmed only with screen reader, browser, version, and settings recorded',
    }),
  },
};

/** 최종 과업 기록 양식. 모범 기록의 기대값은 수정 후 상태 전이로 계산한다. */
export const FinalRecordDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      {scenarios
        .filter((s) => recorded.includes(s.id))
        .map((s) => {
          const { after } = compare(locale, s.steps);
          const model = c.model(
            s.steps.map((step) => step.label[locale]).join(' → '),
            after.results,
            after.message,
            after.busy,
          );
          return (
            <fieldset
              key={s.id}
              className="flex flex-col gap-sm rounded-sm border border-stroke-light p-md"
            >
              <legend className="px-xs font-semiBold text-text-default">{s.title[locale]}</legend>
              <div className="grid gap-sm sm:grid-cols-2">
                {fields.map((f) => (
                  <TextField
                    key={f}
                    label={`${s.title[locale]} — ${c.labels[f]}`}
                    multiline
                    rows={2}
                  />
                ))}
              </div>
              <details className="rounded-sm border border-stroke-light p-md text-xsm">
                <summary className="cursor-pointer font-semiBold text-text-default">
                  {c.reveal}
                </summary>
                <DocTable
                  caption={`${c.caption} — ${s.title[locale]}`}
                  head={c.head}
                  rows={fields.map((f) => [c.labels[f], model[f]])}
                />
              </details>
            </fieldset>
          );
        })}
    </PracticeFrame>
  );
};
