import { getServerLocale } from '@it-tech-blog/preferences/server';

import { PeopleAndContextsPage } from '@/components/start/people-and-contexts/PeopleAndContextsPage';

const metadata = {
  ko: {
    title: '시각·청각·운동·인지 특성과 복합적인 사용 환경 이해하기 — A11y Lab',
    description:
      '특성을 기능적 필요로 보고, 여러 특성과 환경이 겹칠 때 한 과업이 어느 단계에서 막히고 어떻게 복구되는지 기록하는 01장 두 번째 페이지.',
  },
  en: {
    title:
      'Understanding visual, auditory, motor, and cognitive traits in combined contexts — A11y Lab',
    description:
      'Chapter 01, page 2: seeing traits as functional needs, and recording where one task fails and how people recover when traits and environments overlap.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <PeopleAndContextsPage locale={await getServerLocale()} />;

export default Page;
