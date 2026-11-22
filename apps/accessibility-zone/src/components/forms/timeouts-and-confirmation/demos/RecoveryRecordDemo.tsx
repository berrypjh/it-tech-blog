'use client';

import { DocTable, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { TextField } from '@berrypjh/react-ui';

const fields = ['values', 'focus', 'text', 'duplicate', 'unconfirmed'] as const;
type FieldId = (typeof fields)[number];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '세 지점마다 다섯 칸을 채운 뒤 모범 기록과 대조하세요. 입력은 어디에도 보내거나 저장하지 않습니다.',
    labels: {
      values: '값 보존 (전 → 후)',
      focus: '활성 요소 (전 → 후)',
      text: '오류 · 상태 글자',
      duplicate: '중복 처리',
      unconfirmed: '미확인 보조기술 항목',
    },
    reveal: '모범 기록 보기',
    caption: '모범 기록 (교육 예시)',
    head: ['칸', '기록'],
    points: [
      {
        title: '서버 실패 뒤',
        model: {
          values: '전: 김하늘 · sky@example.com · 2 → 후: 같은 값 그대로',
          focus: '누른 응답 버튼 그대로 → 다시 시도 뒤에는 보내기 버튼',
          text: 'status “일시적인 오류로 접수하지 못했습니다. 입력한 값은 그대로 있습니다.” 오류 요약 없음',
          duplicate: '해당 없음 (보낸 제출 1개)',
          unconfirmed: '상태 메시지가 실제로 낭독되는지와 그 횟수',
        },
      },
      {
        title: '응답 역전과 거듭 보내기 뒤',
        model: {
          values: '전: 김하늘 · moon@example.com · 2 → 후: 같은 값. 접수 결과도 같은 값',
          focus: '마지막으로 누른 응답 버튼 그대로. 접수가 반영되면 검토 화면의 제목',
          text: 'status “신청 내용을 접수했습니다.” 늦게 온 앞선 제출의 오류는 글자를 바꾸지 않음',
          duplicate: '같은 내용 거듭 보내기는 새 제출 없음. 접수 1회',
          unconfirmed: '늦은 응답 때 추가 낭독이 없었는지',
        },
      },
      {
        title: '만료와 재인증 뒤',
        model: {
          values: '전: 검토 화면의 접수 값 → 후: 같은 값. 초안 유지',
          focus: '만료 안내의 제목 → 재인증 뒤 검토 화면의 제목',
          text: 'status “재인증했습니다. 하던 화면으로 돌아왔습니다.”',
          duplicate: '확정 1회. 확정 뒤에는 확정 버튼이 없음',
          unconfirmed:
            '만료된 동안 작업 영역이 보조기술에서 실제로 빠지는지, 재인증 화면의 인증 조건',
        },
      },
    ],
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Fill in the five fields at each of the three points, then compare with the model record. Nothing you type is sent or stored.',
    labels: {
      values: 'Value preservation (before → after)',
      focus: 'Active element (before → after)',
      text: 'Error and status text',
      duplicate: 'Duplicate handling',
      unconfirmed: 'Unconfirmed assistive technology items',
    },
    reveal: 'Show the model record',
    caption: 'Model record (teaching example)',
    head: ['Field', 'Record'],
    points: [
      {
        title: 'After the server failure',
        model: {
          values: 'Before: Sky Kim · sky@example.com · 2 → after: the same values',
          focus: 'Stays on the response button pressed → the send button after retry',
          text: 'status “A temporary error stopped the application. Your input is unchanged.” No error summary',
          duplicate: 'Not applicable (one submission sent)',
          unconfirmed: 'Whether and how many times the status message is actually spoken',
        },
      },
      {
        title: 'After the response reversal and repeated sending',
        model: {
          values:
            'Before: Sky Kim · moon@example.com · 2 → after: the same; the accepted result is the same too',
          focus:
            'Stays on the response button pressed last; the review heading once accepted is applied',
          text: 'status “The application was accepted.” The late error of the earlier submission does not change the text',
          duplicate: 'Sending the same content again makes no new submission. Accepted once',
          unconfirmed: 'Whether nothing extra was spoken on the late response',
        },
      },
      {
        title: 'After expiry and re-authentication',
        model: {
          values: 'Before: the accepted values on the review screen → after: the same. Draft kept',
          focus:
            'Heading of the expiry notice → heading of the review screen after re-authenticating',
          text: 'status “Re-authenticated. You are back on the screen you were on.”',
          duplicate: 'Confirmed once. No confirm button after confirming',
          unconfirmed:
            'Whether the work area is really removed for assistive technology while expired; the authentication conditions of the re-authentication screen',
        },
      },
    ],
  },
};

/** 최종 과업의 전후 기록 양식. 세 지점마다 값 보존 · 활성 요소 · 글자 · 중복 처리 · 미확인을 적는다. */
export const RecoveryRecordDemo = () => {
  const c = useLang(content);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      {c.points.map((point) => (
        <fieldset
          key={point.title}
          className="flex flex-col gap-sm rounded-sm border border-stroke-light p-md"
        >
          <legend className="px-xs font-semiBold text-text-default">{point.title}</legend>
          <div className="grid gap-sm sm:grid-cols-2">
            {fields.map((field) => (
              <TextField
                key={field}
                label={`${point.title} — ${c.labels[field]}`}
                multiline
                rows={2}
              />
            ))}
          </div>
          <details className="rounded-sm border border-stroke-light p-md text-xsm">
            <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
            <DocTable
              caption={`${c.caption} — ${point.title}`}
              head={c.head}
              rows={fields.map((field: FieldId) => [c.labels[field], point.model[field]])}
            />
          </details>
        </fieldset>
      ))}
    </PracticeFrame>
  );
};
