'use client';

import { useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { DocTable, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, TextField } from '@berrypjh/react-ui';

import { SCENE_B_START } from '@/components/content/shared/clip';
import { eventFacts } from '@/components/content/shared/event';
import { VerdictLabel } from '@/components/shared/VerdictLabel';

type Field = 'lastA' | 'lastB' | 'entranceA' | 'entranceB';
const fields: Field[] = ['lastA', 'lastB', 'entranceA', 'entranceB'];

/** 원자료의 사실이 답에 들어 있는지 본다. 띄어쓰기 · 대소문자 차이는 무시한다. */
const matchers: Record<'ko' | 'en', Record<'last' | 'entrance', (a: string) => boolean>> = {
  ko: {
    last: (a) => a.includes('일요일') && /15:30|3시\s*30분/.test(a),
    entrance: (a) => a.includes('동쪽'),
  },
  en: {
    last: (a) => /sunday/i.test(a) && /15:30|3:30/.test(a),
    entrance: (a) => /east/i.test(a),
  },
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      '두 질문에 두 경로로 각각 답하고, 잃은 정보와 그 대안을 적은 뒤 원자료와 대조하세요. 개인 정보는 적지 않으며 입력은 어디에도 보내지 않습니다.',
    labels: {
      lastA: '마지막 회차 — 그림 · 표 · 영상 경로의 답',
      lastB: '마지막 회차 — 글 · 자막 · 대본 경로의 답',
      entranceA: '변경된 입구 — 그림 · 표 · 영상 경로의 답',
      entranceB: '변경된 입구 — 글 · 자막 · 대본 경로의 답',
    },
    lost: '한 경로에서 잃은 정보',
    alternative: '그 정보를 위한 대안 (직접 작성)',
    compare: '원자료와 대조',
    same: '원자료와 같음',
    differ: '원자료와 다름',
    empty: '비어 있음',
    source: (v: string) => `원자료: ${v}`,
    result: (n: number) => `네 답 중 ${n}개가 원자료와 같습니다.`,
    reveal: '모범 기록 보기',
    recordCaption: '수정 전후 답 · 출처 · 미확인 (교육 예시)',
    recordHead: ['질문 · 경로', '수정 전 답', '수정 후 답', '출처', '미확인'],
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Answer both questions on both paths, write down the lost information and its alternative, then compare with the source data. Write no personal information; nothing is sent anywhere.',
    labels: {
      lastA: 'Last session — answer from the picture, table, and video path',
      lastB: 'Last session — answer from the text, caption, and transcript path',
      entranceA: 'Changed entrance — answer from the picture, table, and video path',
      entranceB: 'Changed entrance — answer from the text, caption, and transcript path',
    },
    lost: 'Information lost on one path',
    alternative: 'An alternative for it (your own writing)',
    compare: 'Compare with the source data',
    same: 'Matches the source data',
    differ: 'Differs from the source data',
    empty: 'Empty',
    source: (v: string) => `Source data: ${v}`,
    result: (n: number) => `${n} of 4 answers match the source data.`,
    reveal: 'Show the model record',
    recordCaption: 'Answers before and after, sources, unconfirmed items (teaching example)',
    recordHead: ['Question and path', 'Answer before', 'Answer after', 'Source', 'Unconfirmed'],
  },
};

const records = {
  ko: (last: string, entrance: string) => [
    ['마지막 회차 · 표', last, last, '09.5 두 층 헤더 일정표', '없음'],
    [
      '마지막 회차 · 기본 자막',
      '3회차 오후 3시 30분 (요일 없음)',
      `${last} (안내문 HTML 판과 함께)`,
      '09.7 자막 · 09.10 HTML 판',
      '없음',
    ],
    [
      '변경된 입구 · 영상 장면 2',
      entrance,
      entrance,
      `09.7 클립 ${SCENE_B_START}초부터`,
      '실제 화면 낭독기 발화',
    ],
    [
      '변경된 입구 · 기본 자막',
      '찾을 수 없음 (“안내 표시를 확인”만 있음)',
      `${entrance} (오디오 설명판 · 설명 대본)`,
      '09.7 오디오 설명판 · 대본',
      '실제 시청자의 이해',
    ],
  ],
  en: (last: string, entrance: string) => [
    ['Last session · table', last, last, '09.5 schedule with two header layers', 'None'],
    [
      'Last session · standard captions',
      'Session 3 at 3:30 p.m. (no day)',
      `${last} (with the HTML notice)`,
      '09.7 captions and 09.10 HTML version',
      'None',
    ],
    [
      'Changed entrance · video scene 2',
      entrance,
      entrance,
      `09.7 clip from ${SCENE_B_START} s`,
      'Real screen reader speech',
    ],
    [
      'Changed entrance · standard captions',
      'Not found (only “check the sign”)',
      `${entrance} (described version and descriptive transcript)`,
      '09.7 described version and transcript',
      'Real viewers’ understanding',
    ],
  ],
};

/** 최종 과업 기록. 학습자의 답을 각 대안이 아닌 원자료(eventFacts)와 대조한다. */
export const FinalTaskDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const e = eventFacts[locale];
  const [answers, setAnswers] = useState<Record<Field, string>>({
    lastA: '',
    lastB: '',
    entranceA: '',
    entranceB: '',
  });
  const [lost, setLost] = useState('');
  const [alternative, setAlternative] = useState('');
  const [checked, setChecked] = useState(false);

  const verdict = (field: Field) => {
    const answer = answers[field].trim();
    if (!answer) return 'empty';
    const kind = field.startsWith('last') ? 'last' : 'entrance';
    return matchers[locale][kind](answer) ? 'same' : 'differ';
  };
  const matches = fields.filter((f) => verdict(f) === 'same').length;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field} className="flex flex-col gap-xs">
            <TextField
              label={c.labels[field]}
              value={answers[field]}
              onChange={(ev) => setAnswers((prev) => ({ ...prev, [field]: ev.target.value }))}
            />
            {checked && (
              <p className="text-xsm">
                <VerdictLabel
                  id={
                    verdict(field) === 'same' ? 'pass' : verdict(field) === 'empty' ? 'na' : 'fail'
                  }
                >
                  {c[verdict(field)]}
                </VerdictLabel>{' '}
                <span className="text-text-light">
                  {c.source(field.startsWith('last') ? e.lastSession : e.entranceAfter)}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
      <TextField
        label={c.lost}
        multiline
        rows={2}
        value={lost}
        onChange={(ev) => setLost(ev.target.value)}
      />
      <TextField
        label={c.alternative}
        multiline
        rows={2}
        value={alternative}
        onChange={(ev) => setAlternative(ev.target.value)}
      />
      <div className="flex flex-wrap items-center gap-md">
        <Button type="button" variant="outlined" size="sm" onClick={() => setChecked(true)}>
          {c.compare}
        </Button>
        <p role="status" className="text-xsm">
          {checked ? c.result(matches) : ''}
        </p>
      </div>
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
        <DocTable
          caption={c.recordCaption}
          head={c.recordHead}
          rows={records[locale](e.lastSession, e.entranceAfter)}
        />
      </details>
    </PracticeFrame>
  );
};
