import { AppShell as BaseAppShell } from '@it-tech-blog/ui';

import { Sidebar } from './Sidebar';

export const AppShell = ({ children }: { children: React.ReactNode }) => (
  <BaseAppShell
    sidebar={<Sidebar />}
    mobileBrand={
      <span className="text-xxsm tracking-tight">
        <span className="text-[var(--term-accent)] font-bold">$</span>{' '}
        <span className="font-bold text-[var(--term-fg)]">next-lab</span>
      </span>
    }
  >
    {children}
  </BaseAppShell>
);
