import { AppShell as BaseAppShell } from '@it-tech-blog/ui';

import { REACT_VERSION } from '@/data';

import { Sidebar } from './Sidebar';

export const AppShell = ({ children }: { children: React.ReactNode }) => (
  <BaseAppShell
    sidebar={<Sidebar />}
    mobileBrand={
      <span className="flex items-baseline gap-sm text-xxsm tracking-tight">
        <span>
          <span className="text-[var(--term-accent)] font-bold">$</span>{' '}
          <span className="font-bold text-[var(--term-fg)]">react-lab</span>
        </span>
        <span className="text-[10px] text-[var(--term-dim)] tabular-nums">v{REACT_VERSION}</span>
      </span>
    }
  >
    {children}
  </BaseAppShell>
);
