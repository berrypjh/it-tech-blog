import { getServerLocale } from '@it-tech-blog/preferences/server';
import { NotFoundPage } from '@it-tech-blog/ui';

const NotFound = async () => {
  const locale = await getServerLocale();
  return <NotFoundPage homeHref="/" locale={locale} />;
};

export default NotFound;
