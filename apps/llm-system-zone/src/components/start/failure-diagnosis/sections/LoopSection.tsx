import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { FailureLoopDiagram } from '../diagrams/FailureLoopDiagram';
import { getToc } from '../toc';

const DEBT = 'https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf';

const content = {
  ko: {
    intro:
      '조사는 한 번에 가설 하나를 고르는 반복입니다. 가설 하나를 고치고 같은 실패 사례와 정상 사례를 다시 확인하며, 실패가 남아 있거나 정상 사례가 깨지면 가설로 돌아갑니다.',
    why: (
      <>
        한 번에 하나만 바꾸는 이유는 무엇이 효과가 있었는지 알기 위해서입니다. ML 시스템에서는 한
        입력이나 설정을 바꾸면 다른 것의 영향까지 달라질 수 있다는 점이 지적되어 왔습니다. Sculley
        등은 이를 CACE(Changing Anything Changes Everything) 원칙으로 불렀습니다.{' '}
        <ExternalLink href={DEBT}>Hidden Technical Debt in Machine Learning Systems</ExternalLink>{' '}
        이 논문은 LLM 이전의 ML 시스템을 다루지만, 여러 구성 요소가 얽힌 시스템에서 변경을 나눠
        검증해야 한다는 점은 같은 방향입니다.
      </>
    ),
    promptTitle: '프롬프트 수정은 가능한 조치 중 하나입니다',
    prompt:
      '프롬프트를 고치는 것은 증거가 Prompt · Context 문제를 지지할 때 고르는 조치입니다. 낡은 색인, 필터, 도구 timeout, 검증 공백, 모호한 성공 기준은 프롬프트로 고쳐지지 않으며, 프롬프트를 바꿔 우연히 증상이 가려지면 원인은 남은 채 다른 곳에서 다시 나타납니다.',
  },
  en: {
    intro:
      'Investigation is a loop that picks one hypothesis at a time. Fix one hypothesis and recheck the same failing case and a normal case; if the failure remains or the normal case breaks, return to hypotheses.',
    why: (
      <>
        We change only one thing at a time to know what had an effect. In ML systems it has been
        pointed out that changing one input or setting can alter the influence of others. Sculley et
        al. called this the CACE (Changing Anything Changes Everything) principle.{' '}
        <ExternalLink href={DEBT}>Hidden Technical Debt in Machine Learning Systems</ExternalLink>{' '}
        That paper concerns pre-LLM ML systems, but it points the same way: in a system whose
        components are entangled, verify changes separately.
      </>
    ),
    promptTitle: 'A prompt edit is one possible action',
    prompt:
      'Editing the prompt is the action you pick when the evidence supports a prompt or context problem. A stale index, filters, tool timeouts, a validation gap, or vague success criteria are not fixed by the prompt, and if a prompt change happens to mask the symptom, the cause remains and reappears elsewhere.',
  },
};

export const LoopSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.loop.id}>
      <DocH2 {...toc.loop} />
      <p>{c.intro}</p>
      <FailureLoopDiagram locale={locale} />
      <p>{c.why}</p>
      <Callout variant="pitfall" title={c.promptTitle}>
        <p>{c.prompt}</p>
      </Callout>
    </section>
  );
};
