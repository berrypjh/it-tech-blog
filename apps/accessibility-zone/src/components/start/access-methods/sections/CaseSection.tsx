import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { type CaseFields, CaseRecord } from '@/components/shared/CaseRecord';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '보이는 글자와 접근 가능한 이름이 어긋나면 화면 낭독기 사용자는 이름을 들을 수 있지만, 음성 입력 사용자는 보이는 글자를 말해도 버튼을 누를 수 없습니다. 아래 버튼은 이름이 보이는 글자를 포함하지 않으므로 WCAG 2.2 성공 기준 2.5.3 이름의 레이블(A)을 어깁니다.',
    codeLabel: '가상의 화면 — 보이는 글자 "보내기", 접근 가능한 이름 "메시지 전송"',
    code: `<button type="button" aria-label="메시지 전송">보내기</button>`,
    title: '사례 — 고객 문의 보내기, 음성 입력 (가상의 화면)',
    fields: {
      user: '손으로 키보드와 마우스를 쓰기 어려워 음성 입력으로 컴퓨터를 쓰는 사용자',
      task: '고객 문의 내용을 받아쓰기로 입력하고 보내기',
      context: '데스크톱 운영체제의 음성 입력 기능, 데스크톱 브라우저',
      barrier: '버튼의 보이는 글자는 "보내기"인데 접근 가능한 이름은 "메시지 전송"입니다.',
      condition: 'aria-label이 보이는 글자를 포함하지 않는 다른 문구로 이름을 덮어쓸 때',
      stage: 'operate',
      impact: '"보내기 클릭"이라고 말해도 버튼이 눌리지 않아 문의를 보낼 수 없습니다.',
      recovery:
        '번호나 격자 표시 명령을 알고 있으면 복구할 수 있습니다. 명령을 모르면 복구 경로가 없습니다.',
      observed:
        '코드와 개발자 도구의 Accessibility 탭에서 이름이 "메시지 전송"으로 계산되는 것을 확인했습니다.',
      verify:
        '실제 음성 입력 제품과 버전에서 "보내기"라는 명령이 이 버튼에 연결되는지, 제품마다 이름 일치를 판단하는 방식이 다른지는 아직 확인하지 않았습니다.',
    } satisfies CaseFields,
  },
  en: {
    intro:
      'When the visible text and the accessible name disagree, a screen reader user can hear the name, but a speech input user cannot press the button by saying the visible text. The button below fails WCAG 2.2 success criterion 2.5.3 Label in Name (A) because its name does not contain the visible text.',
    codeLabel: 'Hypothetical screen — visible text "Send", accessible name "Submit message"',
    code: `<button type="button" aria-label="Submit message">Send</button>`,
    title: 'Case — sending a support request with speech input (hypothetical screen)',
    fields: {
      user: 'Someone who uses a computer by speech input because using a keyboard and mouse by hand is hard',
      task: 'Dictate a support request and send it',
      context: 'Desktop OS speech input feature, desktop browser',
      barrier: 'The button shows "Send", but its accessible name is "Submit message".',
      condition:
        'When aria-label overrides the name with wording that does not contain the visible text',
      stage: 'operate',
      impact: 'Saying "Click Send" does not press the button, so the request cannot be sent.',
      recovery:
        'Recoverable if they know the number or grid overlay commands. Otherwise there is no recovery path.',
      observed:
        'The code and the DevTools Accessibility pane show the name computed as "Submit message".',
      verify:
        'Whether the command "Send" reaches this button in a real speech input product and version, and whether products judge name matching differently, has not been checked yet.',
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
      <CodeBlock label={c.codeLabel} tone="bad" code={c.code} />
      <CaseRecord locale={locale} title={c.title} fields={c.fields} />
    </section>
  );
};
