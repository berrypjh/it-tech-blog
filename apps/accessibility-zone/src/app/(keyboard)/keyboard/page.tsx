import { getServerLocale } from '@it-tech-blog/preferences/server';

const titles = {
  ko: '키보드 탐색 기본',
  en: 'Keyboard Navigation Basics',
};

const KeyboardPage = async () => {
  const locale = await getServerLocale();
  return <h1>{titles[locale]}</h1>;
};

export default KeyboardPage;
