import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LabBackground, SpatialTechLab } from '@/components/spatial-lab';
import { ThemeToggle } from '@/components/theme';
import { getVisibleTopics } from '@/data/topics';

const SUBTITLE = {
  ko: '하나의 개념을 실험대 위에서 차분히 풀어봐요',
  en: 'Unfold one concept at a time, calmly, on the lab bench',
};

const Page = async () => {
  const locale = await getServerLocale();

  return (
    <main className="lab-page">
      <LabBackground />
      <ThemeToggle />

      <SpatialTechLab topics={getVisibleTopics()} locale={locale}>
        <h1 className="lab-title">Interactive Tech Lab</h1>
        <p className="lab-subtitle">{SUBTITLE[locale]}</p>
      </SpatialTechLab>
    </main>
  );
};

export default Page;
