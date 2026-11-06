import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: <>항목을 비교할 때는 아래 순서로 공식 원문을 직접 확인합니다.</>,
    steps: [
      '국립전파연구원 누리집에서 표준 등록 페이지(KS X OT0003)를 엽니다.',
      '제목 · 표준번호 · 제개정일을 확인하고, 첨부파일 가운데 비교할 판본(2.2)의 원문을 받습니다. 이름이 비슷한 이전 판(2.1) 첨부와 헷갈리지 않습니다.',
      '원문에서 검사항목 번호 · 문장 · 조건 · 예외를 찾아 그대로 옮깁니다. 요약하지 않습니다.',
      'WCAG 쪽도 판본(예: 2024-12-12 Recommendation)과 절 번호를 정하고 원문 문장을 옮깁니다.',
      '두 문장을 나란히 놓고 기준값 · 단위 · 문장의 힘 · 예외 · 확인 증거를 칸별로 비교합니다.',
      '확인한 날짜와, 열지 못했거나 찾지 못한 부분을 기록에 남깁니다.',
    ],
    calloutTitle: '원문을 열 수 없으면 비교를 확인했다고 쓰지 않습니다',
    callout: (
      <>
        첨부 원문을 받지 못했거나 일부만 읽었다면 그 항목의 비교는 &quot;미확인&quot;으로 남깁니다.
        제3자가 정리한 대응표나 기억으로 채우지 않습니다. 이번 확인에서도 첨부 파일 내려받기가 여러
        번 중간에 끊겼고, 서버가 알린 크기와 같은 파일을 받은 뒤에 읽었습니다.
      </>
    ),
  },
  en: {
    intro: <>When comparing items, check the official original yourself in this order.</>,
    steps: [
      'Open the standard’s registry page (KS X OT0003) on the National Radio Research Agency website.',
      'Check the title, standard number, and revision date, then download the original of the edition you are comparing (2.2) from the attachments. Do not confuse it with the similarly named earlier edition (2.1).',
      'Find the checklist item number, sentence, conditions, and exceptions in the original and copy them as written. Do not summarize.',
      'For WCAG too, fix the edition (for example, the 2024-12-12 Recommendation) and section number, and copy the original sentence.',
      'Set the two sentences side by side and compare default value, unit, force, exceptions, and evidence field by field.',
      'Record the date you checked, and any part you could not open or find.',
    ],
    calloutTitle: 'If you cannot open the original, do not write that the comparison was checked',
    callout: (
      <>
        If you could not download the attached original or read only part of it, leave that
        item&apos;s comparison as &quot;unconfirmed.&quot; Do not fill it from a third party&apos;s
        mapping table or memory. In this check too, the attachment download was cut off several
        times, and the file was read only after a download whose size matched the size the server
        reported.
      </>
    ),
  },
};

export const HowToSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.howTo.id}>
      <DocH2 {...toc.howTo} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
