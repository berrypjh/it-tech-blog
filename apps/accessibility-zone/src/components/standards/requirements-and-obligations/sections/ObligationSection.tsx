import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: <>특정 서비스에 어떤 의무가 있는지 알려면 적어도 아래를 차례로 확인합니다.</>,
    steps: [
      '관할 — 어느 나라 · 지역의 법령과 제도가 적용되는지',
      '대상 — 서비스를 운영하는 주체(기관 · 사업자 유형)와 서비스 유형이 의무 대상에 드는지',
      '시점 — 의무가 언제부터 적용되는지, 판정하려는 시점에 유효한 판본은 무엇인지',
      '적용 문서 — 법령 · 계약 · 인증이 참조하는 기술 기준과 그 판본 · 수준',
      '원문 — 위 네 가지를 법령 원문과 담당 기관의 공식 안내, 계약서 원문에서 확인',
      '판단 — 법적 판단이 필요하면 담당 기관이나 법률 전문가에게 확인',
    ],
    calloutTitle: '이 사이트는 법적 적합성을 판단하지 않습니다',
    callout: (
      <>
        이 장의 판정 기록은 기술 기준에 대한 판단입니다. &quot;이 서비스는 법적 의무를 다했다&quot;
        또는 &quot;의무 대상이 아니다&quot;는 위 절차를 거친 뒤 권한 있는 곳에서 정할 일이고,
        기록에는 확인하지 못한 단계를 미확인으로 남깁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>To know what obligations a particular service has, check at least the following in order.</>
    ),
    steps: [
      'Jurisdiction — which country’s or region’s laws and schemes apply',
      'Subject — whether the operator (type of organization or business) and type of service fall under the obligation',
      'Time — from when the obligation applies, and which edition is in force at the time you are judging',
      'Applicable documents — the technical standard a law, contract, or certification references, with its edition and level',
      'Original text — confirm the four points above in the law itself, official guidance from the responsible agency, and the contract',
      'Judgment — if a legal judgment is needed, confirm with the responsible agency or a legal professional',
    ],
    calloutTitle: 'This site does not judge legal compliance',
    callout: (
      <>
        The judgment records in this chapter are judgments against technical standards. &quot;This
        service has met its legal obligations&quot; or &quot;it is not subject to them&quot; is for
        an authorized body to decide after the procedure above, and the record leaves unchecked
        steps as unconfirmed.
      </>
    ),
  },
};

export const ObligationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.obligation.id}>
      <DocH2 {...toc.obligation} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
