import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fragmentModeFiberContent,
  FragmentModeFiberPage,
} from '@/components/element-to-fiber/fragment-mode-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fragmentModeFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Fragment & Mode — Which Fiber Do They Become? — React Lab'
        : 'Fragment와 Mode는 어떤 Fiber가 되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FragmentModeFiberPage locale={locale} />;
};

export default Page;
