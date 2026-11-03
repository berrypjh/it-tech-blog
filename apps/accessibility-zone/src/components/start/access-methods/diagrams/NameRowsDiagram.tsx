import type { Locale } from '@it-tech-blog/preferences';

import { cx, List, ListItem } from '@berrypjh/react-ui';
import { Check, Trash2, Volume2, X } from 'lucide-react';

/** 해설 대본이 그림의 부분을 하나씩 강조할 수 있게, 부품마다 data-part(panel · row · button · name · result)를 단다. */
const orders = ['1023', '1024', '1025'];

/** 한 판의 내용. label이 없으면 아이콘만 있는 버튼이고, tooltip이 있으면 두 번째 줄에 마우스를 올린 장면을 그린다. */
type Panel = {
  title: string;
  label?: string;
  name: (order: string) => string;
  tooltip?: string;
  result: string;
  ok: boolean;
};

const content = {
  ko: {
    order: (n: string) => `주문 ${n}`,
    nameLabel: '보조기술이 받는 이름',
    iconOnly: {
      title: '아이콘만 있는 버튼',
      name: () => '(없음)',
      tooltip: '주문 취소',
      result: '뜻은 마우스를 올려야만 보이고, 보조기술이 받는 이름은 비어 있습니다.',
      ok: false,
    },
    fixed: [
      {
        title: '보이는 글자만 둔 버튼',
        label: '주문 취소',
        name: () => '주문 취소',
        result: '세 줄의 이름이 같아, 어느 주문의 버튼인지 알 수 없습니다.',
        ok: false,
      },
      {
        title: '주문 번호를 더한 버튼',
        label: '주문 취소',
        name: (n: string) => `주문 취소, 주문 ${n}`,
        result: '줄마다 이름이 달라, 어느 주문의 버튼인지 압니다.',
        ok: true,
      },
    ],
    fixedCaption:
      '두 화면은 똑같이 "주문 취소"를 보여 줍니다. 달라지는 것은 화면 낭독기가 읽고 음성 입력이 기준으로 삼는 이름뿐입니다.',
  },
  en: {
    order: (n: string) => `Order ${n}`,
    nameLabel: 'Name assistive technology receives',
    iconOnly: {
      title: 'Icon-only button',
      name: () => '(none)',
      tooltip: 'Cancel order',
      result:
        'Its meaning appears only on mouse hover, and the name assistive technology receives is empty.',
      ok: false,
    },
    fixed: [
      {
        title: 'Button with visible text only',
        label: 'Cancel order',
        name: () => 'Cancel order',
        result: 'All three rows share one name, so you cannot tell which order a button cancels.',
        ok: false,
      },
      {
        title: 'Button with the order number added',
        label: 'Cancel order',
        name: (n: string) => `Cancel order, order ${n}`,
        result: 'Each row has its own name, so you know which order a button cancels.',
        ok: true,
      },
    ],
    fixedCaption:
      'Both screens show the same "Cancel order". Only the name that screen readers announce and speech input matches against changes.',
  },
} satisfies Record<Locale, unknown>;

/**
 * 운영체제 기본 마우스 포인터 모양(화살촉 + 굵은 꼬리). lucide의 포인터는 꼬리가 없거나 가는 선뿐이라
 * 커서로 읽히지 않아 직접 그린다. 안은 배경색, 테두리는 글자색이라 두 테마에서 모두 보인다.
 */
const Cursor = () => (
  <svg
    viewBox="0 0 24 24"
    className="absolute top-1/2 left-1/2 -mt-[2px] -ml-[3px] h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M5 2.5v16.2l4.1-3.9 2.7 6.3 2.6-1.1-2.7-6.2h5.8z"
      fill="var(--ds-background-default)"
      stroke="var(--ds-text-default)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

/** 버튼 모양. 그림이라 누를 수 없다. tooltip이 있으면 마우스를 올린 장면이다: 버튼을 강조하고, 포인터를 버튼 위에, 꼬리 달린 툴팁을 옆에 둔다. */
const FakeButton = ({ label, tooltip }: { label?: string; tooltip?: string }) => (
  <span className="relative inline-flex">
    {tooltip && (
      <span className="absolute top-1/2 right-full mr-sm flex -translate-y-1/2 items-center whitespace-nowrap rounded-sm bg-[var(--ds-text-default)] px-sm py-2xs text-xxsm leading-xxsm text-[var(--ds-background-default)]">
        {tooltip}
        {/* 버튼 쪽을 가리키는 꼬리. 툴팁이 이 버튼의 것임을 보인다. */}
        <span className="absolute top-1/2 -right-[3px] h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-[var(--ds-text-default)]" />
      </span>
    )}
    <span
      data-part="button"
      className={cx(
        'inline-flex items-center gap-2xs rounded-sm border px-sm py-2xs text-xxsm leading-xxsm text-text-default',
        tooltip ? 'border-stroke-primary bg-background-grey/20' : 'border-stroke-light',
      )}
    >
      <Trash2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {label}
    </span>
    {tooltip && <Cursor />}
  </span>
);

/** 한 판: 주문 줄 세 개와, 줄마다 보조기술이 받는 이름. */
const NamePanel = ({ panel, locale }: { panel: Panel; locale: Locale }) => {
  const c = content[locale];
  const ResultIcon = panel.ok ? Check : X;

  return (
    <div
      data-part="panel"
      className="flex flex-col gap-sm rounded-md border border-stroke-light bg-background-surface p-md"
    >
      <p className="text-xsm leading-xsm font-semiBold text-text-default">{panel.title}</p>
      <List className="flex flex-col divide-y divide-stroke-light">
        {orders.map((n, i) => {
          const tooltip = i === 1 ? panel.tooltip : undefined;
          return (
            <ListItem key={n} className="flex flex-col gap-xs py-sm first:pt-0 last:pb-0">
              <span
                data-part="row"
                className="flex items-center justify-between gap-sm text-xsm leading-xsm"
              >
                <span className="text-text-default">{c.order(n)}</span>
                <FakeButton label={panel.label} tooltip={tooltip} />
              </span>
              <span
                data-part="name"
                className="flex items-center gap-xs rounded-sm bg-background-grey/20 px-sm py-2xs text-xxsm leading-xxsm text-text-light"
              >
                <Volume2 className="h-3.5 w-3.5 shrink-0 text-text-primary" aria-hidden="true" />
                {c.nameLabel}: {panel.name(n)}
              </span>
            </ListItem>
          );
        })}
      </List>
      <p
        data-part="result"
        className={cx(
          'flex items-start gap-xs text-xxsm leading-xxsm',
          panel.ok ? 'text-text-success' : 'text-text-error',
        )}
      >
        <span className="flex h-[1lh] shrink-0 items-center">
          <ResultIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        {panel.result}
      </p>
    </div>
  );
};

/** 문제 화면: 아이콘만 있는 취소 버튼. 뜻은 마우스를 올린 줄의 툴팁에만 있고, 받는 이름은 비어 있다. */
export const IconOnlyDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="mx-auto my-xl max-w-[26rem]">
      <NamePanel panel={c.iconOnly} locale={locale} />
    </figure>
  );
};

/** 고친 화면: 화면 글자는 같고 보조기술이 받는 이름만 줄마다 달라지는 것을, 주문 목록 모형 두 개로 비교한다. */
export const NameRowsDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl flex flex-col gap-xs">
      <div className="grid gap-md sm:grid-cols-2">
        {c.fixed.map((panel) => (
          <NamePanel key={panel.title} panel={panel} locale={locale} />
        ))}
      </div>
      <figcaption className="text-xxsm leading-xxsm text-text-light">{c.fixedCaption}</figcaption>
    </figure>
  );
};
