import type { Locale } from '@it-tech-blog/preferences';

import { guideFile, guideText } from '@/components/content/documents-and-page-references/guide';

const locales: Locale[] = ['ko', 'en'];

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ file: guideFile(locale) }));

/** 09.10의 내려받는 행사 안내(UTF-8 텍스트). HTML 판과 같은 원자료에서 만든다. */
export const GET = async (_request: Request, { params }: { params: Promise<{ file: string }> }) => {
  const { file } = await params;
  const locale = locales.find((l) => guideFile(l) === file);
  if (!locale) return new Response('Not found', { status: 404 });
  return new Response(guideText(locale), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${file}"`,
    },
  });
};
