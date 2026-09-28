import type { Locale } from '@it-tech-blog/preferences';

import { cx, List, ListItem } from '@berrypjh/react-ui';
import { ArrowDown, Plus } from 'lucide-react';

const content = {
  ko: {
    factors: [
      { title: '사용자의 능력', detail: '시각 · 청각 · 운동 · 인지' },
      { title: '사용 환경', detail: '밝기 · 소음 · 이동 중 · 네트워크' },
      { title: '입력·출력 방식', detail: '키보드 · 스위치 · 음성 · 확대 · 스크린 리더' },
      { title: '인터페이스 설계', detail: '프론트엔드가 직접 결정합니다', owned: true },
    ],
    barrier: '장벽(Barrier)',
    or: '또는',
    accessible: '접근 가능한 경험',
    caption: '장벽은 사람에게 있는 것이 아니라 이 조합에서 생깁니다.',
  },
  en: {
    factors: [
      { title: 'User abilities', detail: 'Vision · hearing · motor · cognition' },
      { title: 'Environment', detail: 'Glare · noise · on the move · network' },
      { title: 'Input & output', detail: 'Keyboard · switch · voice · zoom · screen reader' },
      { title: 'Interface design', detail: 'Decided directly by frontend', owned: true },
    ],
    barrier: 'Barrier',
    or: 'or',
    accessible: 'Accessible experience',
    caption: 'Barriers do not live in people. They come from this combination.',
  },
};

/** 장벽은 사람이 아니라 네 요소의 조합에서 생긴다. */
export const BarrierDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl flex flex-col gap-md rounded-md border border-stroke-light bg-background-default p-lg">
      <List className="grid gap-sm sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {c.factors.map((f, i) => (
          <ListItem key={f.title} className="contents">
            {i > 0 && (
              <Plus
                className="h-4 w-4 self-center justify-self-center text-text-light"
                aria-hidden="true"
              />
            )}
            <div
              className={cx(
                'flex flex-col gap-2xs rounded-sm border p-md',
                f.owned
                  ? 'border-stroke-primary bg-[var(--ds-background-selected)]'
                  : 'border-stroke-light bg-background-surface',
              )}
            >
              <span
                className={cx(
                  'text-xsm font-semiBold',
                  f.owned ? 'text-text-primary' : 'text-text-default',
                )}
              >
                {f.title}
              </span>
              <span className="text-xxsm text-text-light">{f.detail}</span>
            </div>
          </ListItem>
        ))}
      </List>

      <ArrowDown className="h-4 w-4 self-center text-text-light" aria-hidden="true" />

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-sm text-center text-xsm font-semiBold">
        <span className="rounded-sm bg-error-er500/10 p-sm text-text-error">{c.barrier}</span>
        <span className="text-xxsm font-regular text-text-light">{c.or}</span>
        <span className="rounded-sm bg-success-su500/10 p-sm text-text-success">
          {c.accessible}
        </span>
      </div>

      <figcaption className="text-center text-xxsm text-text-light">{c.caption}</figcaption>
    </figure>
  );
};
