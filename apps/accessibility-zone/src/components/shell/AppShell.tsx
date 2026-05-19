import { AppShell as BaseAppShell } from '@it-tech-blog/ui';

import { Sidebar } from './Sidebar';

export const AppShell = ({ children }: { children: React.ReactNode }) => (
  <BaseAppShell
    sidebar={<Sidebar />}
    mobileBrand={
      <span className="font-bold text-xsm text-text-default tracking-tight">A11y Lab</span>
    }
  >
    {children}
  </BaseAppShell>
);
