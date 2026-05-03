import { AppShell } from '@/components/shell';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppShell>{children}</AppShell>;
};

export default MainLayout;
