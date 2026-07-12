import { getServerLocale } from '@it-tech-blog/preferences/server';

const titles = {
  ko: '색상 대비',
  en: 'Color Contrast',
};

const ContrastPage = async () => {
  const locale = await getServerLocale();
  return <h1>{titles[locale]}</h1>;
};

export default ContrastPage;
