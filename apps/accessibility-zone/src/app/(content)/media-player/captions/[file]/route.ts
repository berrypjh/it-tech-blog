import {
  captionCues,
  type ClipLang,
  clipName,
  type ClipVersion,
  toVtt,
} from '@/components/content/shared/clip';

const tracks = (['ko', 'en'] as ClipLang[]).flatMap((lang) =>
  (['standard', 'described'] as ClipVersion[]).map((version) => ({
    lang,
    version,
    file: `${clipName(lang, version)}.vtt`,
  })),
);

export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => tracks.map(({ file }) => ({ file }));

/** 09장 클립의 WebVTT 자막. 대본과 같은 원본(clip.ts)에서 만든다. */
export const GET = async (_request: Request, { params }: { params: Promise<{ file: string }> }) => {
  const { file } = await params;
  const track = tracks.find((t) => t.file === file);
  if (!track) return new Response('Not found', { status: 404 });
  return new Response(toVtt(captionCues(track.lang, track.version)), {
    headers: { 'Content-Type': 'text/vtt; charset=utf-8' },
  });
};
