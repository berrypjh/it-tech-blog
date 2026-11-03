import Image, { type StaticImageData } from 'next/image';

/**
 * 테마마다 따로 그린 그림 한 장. html의 dark 클래스로 라이트 · 다크 그림을 바꾼다.
 * 그림은 미리 변환한 WebP라 최적화 서버를 거치지 않는다(unoptimized). 내용은 본문이 글로도 설명한다.
 * 본문 폭 전체로 두면 4:3 그림이 한 화면을 차지해 앞뒤 문단과 함께 보이지 않으므로 폭을 줄인다.
 */
export const ThemedFigure = ({
  light,
  dark,
  alt,
  caption,
}: {
  light: StaticImageData;
  dark: StaticImageData;
  alt: string;
  caption: string;
}) => (
  <figure className="mx-auto my-xl flex max-w-[36rem] flex-col gap-xs">
    <div className="overflow-hidden rounded-md border border-stroke-light">
      <Image src={light} alt={alt} unoptimized className="h-auto w-full dark:hidden" />
      <Image src={dark} alt={alt} unoptimized className="hidden h-auto w-full dark:block" />
    </div>
    <figcaption className="text-xxsm leading-xxsm text-text-light">{caption}</figcaption>
  </figure>
);
