'use client';

import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';
import { FlaskConical, Info, type LucideIcon, TriangleAlert } from 'lucide-react';

type Variant = 'note' | 'pitfall' | 'practice';

const variants: Record<Variant, { icon: LucideIcon; box: string; title: string }> = {
  note: {
    icon: Info,
    box: 'border-stroke-primary bg-[var(--ds-background-selected)]',
    title: 'text-text-primary',
  },
  pitfall: {
    icon: TriangleAlert,
    box: 'border-stroke-warning bg-warning-wa500/10',
    title: 'text-text-warning',
  },
  practice: {
    icon: FlaskConical,
    box: 'border-stroke-success bg-success-su500/10',
    title: 'text-text-success',
  },
};

const strings = {
  ko: { note: '핵심', pitfall: '주의', practice: '직접 확인' },
  en: { note: 'Key point', pitfall: 'Pitfall', practice: 'Try it' },
};

/** 본문 흐름에서 강조가 필요한 내용을 담는 콜아웃. */
export const Callout = ({
  variant,
  title,
  children,
}: {
  variant: Variant;
  title?: string;
  children: React.ReactNode;
}) => {
  const v = variants[variant];
  const defaultLabels = useLang(strings);
  const label = title ?? defaultLabels[variant];
  const Icon = v.icon;

  return (
    <aside
      aria-label={label}
      className={cx('my-xl rounded-md border-l-primitiveBorder-md px-xl py-lg', v.box)}
    >
      <p className={cx('mb-xs flex items-center gap-sm text-xsm font-bold', v.title)}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <div className="text-xsm leading-xsm [&_p+p]:mt-sm">{children}</div>
    </aside>
  );
};
