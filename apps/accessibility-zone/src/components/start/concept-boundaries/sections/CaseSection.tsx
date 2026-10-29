import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { type CaseFields, CaseRecord } from '@/components/shared/CaseRecord';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '회원가입 사례의 접근성 판단을 01장의 사례 기록 형식으로 남깁니다. 적합성 평가 결과는 "환경 · 사용 방식" 칸의 전제로, 과업 실패는 "영향" 칸에 따로 적어 두 판단이 섞이지 않게 합니다.',
    title: '사례 — 회원가입 비밀번호 단계, 화면 낭독기 (가상의 화면)',
    fields: {
      user: '화면 낭독기와 키보드로 웹을 쓰는 사용자',
      task: '회원가입의 비밀번호 단계를 통과해 휴대폰 인증으로 넘어가기',
      context:
        '데스크톱 브라우저 + 화면 낭독기. 가입 절차 세 페이지는 WCAG 2.2 AA 평가에서 발견한 문제를 모두 고친 상태',
      barrier:
        '제출하면 오류를 표시한 페이지를 새로 불러오고 포커스가 맨 위에 있어, 화면 낭독기로 처음부터 다시 훑어 오류를 찾아야 합니다.',
      condition: '오류가 아래쪽 칸에 있고, 오류 요약이나 첫 오류로의 포커스 이동이 없을 때',
      stage: 'state',
      impact:
        '오류를 찾느라 시간이 오래 걸립니다. 평가 참여자 2명 중 1명은 오류를 찾지 못해 가입을 포기했습니다.',
      recovery:
        '페이지를 처음부터 다시 훑어 오류를 찾으면 복구할 수 있지만, 시간이 오래 걸리고 놓치기 쉽습니다.',
      observed:
        '규칙과 오류는 글자로 표시되고 칸과 연결되어 있습니다. 제출 뒤 포커스는 페이지 맨 위에 있고 오류 요약은 없습니다.',
      verify:
        '참여자 수가 적으므로 다른 화면 낭독기와 모바일 환경에서도 같은 일이 생기는지, 오류 요약을 두거나 첫 오류로 포커스를 옮기면 찾는 시간이 줄어드는지.',
    } satisfies CaseFields,
  },
  en: {
    intro:
      'Here the accessibility judgment from the sign-up case is kept in the chapter 01 case record format. The conformance result goes in the "Environment · way of use" field as a premise, and the task failure goes in "Impact", so the two judgments stay apart.',
    title: 'Case — sign-up password step with a screen reader (hypothetical screen)',
    fields: {
      user: 'Someone who uses the web with a screen reader and keyboard',
      task: 'Pass the password step of sign-up and move on to phone verification',
      context:
        'Desktop browser + screen reader. Every issue found in a WCAG 2.2 AA evaluation of the three sign-up pages has been fixed',
      barrier:
        'Submitting reloads the page with errors shown and focus at the top, so a screen reader user must scan from the start again to find the error.',
      condition:
        'When the error is in a lower field and there is no error summary or focus move to the first error',
      stage: 'state',
      impact:
        'Finding the error takes a long time. One of the 2 participants could not find it and gave up on signing up.',
      recovery:
        'Scanning the page from the start again to find the error recovers, but it is slow and easy to miss.',
      observed:
        'The rule and errors are shown in text and connected to the field. After submitting, focus is at the top of the page and there is no error summary.',
      verify:
        'With so few participants, whether the same happens with other screen readers and on mobile, and whether an error summary or moving focus to the first error shortens the search.',
    } satisfies CaseFields,
  },
};

export const CaseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.caseRecord.id}>
      <DocH2 {...toc.caseRecord} />
      <p>{c.intro}</p>
      <CaseRecord locale={locale} title={c.title} fields={c.fields} />
    </section>
  );
};
