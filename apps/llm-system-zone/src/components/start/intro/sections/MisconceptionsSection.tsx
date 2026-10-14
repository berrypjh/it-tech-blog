import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Check, X } from 'lucide-react';

import { getToc } from '../toc';

const AGENTS = 'https://www.anthropic.com/engineering/building-effective-agents';

const content = {
  ko: {
    intro: '지금까지의 내용을 오해와 교정의 짝으로 줄입니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'],
    pairs: [
      [
        '좋은 모델만 고르면 끝이다',
        '모델은 구성 요소 하나입니다. 입력, 검증, 실행 권한, 결과 확인은 앱이 정하고, 같은 모델도 앱의 설계에 따라 업무 결과가 달라집니다.',
      ],
      [
        '유창한 답변은 정확한 결과다',
        '유창함은 문장의 성질이고 정확함은 내용의 성질입니다. 정확함은 근거 대조와 검증으로 따로 확인합니다.',
      ],
      [
        '모든 LLM 앱에는 Agent나 RAG가 필요하다',
        <>
          필요한 문제에만 더합니다. 단순한 해법으로 시작하고 부족할 때만 복잡성을 더하라는{' '}
          <ExternalLink href={AGENTS}>Anthropic의 에이전트 설계 글</ExternalLink>의 권고도 있습니다.
        </>,
      ],
    ],
  },
  en: {
    intro: 'Here is what we covered, condensed into misconception and correction pairs.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'],
    pairs: [
      [
        'Picking a good model is enough',
        'The model is one component. The app decides input, validation, execution permission, and result checks, so the same model yields different task outcomes depending on the app design.',
      ],
      [
        'A fluent answer is a correct result',
        'Fluency is a property of the sentence and correctness a property of the content. Correctness is checked separately, by comparing with evidence and validating.',
      ],
      [
        'Every LLM app needs an Agent or RAG',
        <>
          Add them only for problems that need them.{' '}
          <ExternalLink href={AGENTS}>
            Anthropic&apos;s article on building effective agents
          </ExternalLink>{' '}
          also advises starting with the simplest solution and adding complexity only when it falls
          short.
        </>,
      ],
    ],
  },
};

export const MisconceptionsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.pairs.map(([myth, fact]) => [
    <span key="myth" className="flex gap-sm">
      <X className="mt-xs h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
      {myth}
    </span>,
    <span key="fact" className="flex gap-sm text-text-default">
      <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
      <span>{fact}</span>
    </span>,
  ]);

  return (
    <section aria-labelledby={toc.misconceptions.id}>
      <DocH2 {...toc.misconceptions} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
    </section>
  );
};
