import { getServerLocale } from '@it-tech-blog/preferences/server';

import { MediaPlayerPage } from '@/components/content/media-player/MediaPlayerPage';

const metadata = {
  ko: {
    title: '미디어 플레이어 · 자동 재생 · 배경음의 제어 검증하기 — A11y Lab',
    description:
      '직접 만든 짧은 클립을 사용자가 시작하는 브라우저 미디어 컨트롤로 재생하고, 자막 트랙 · 대본 · 오류 경로와 자산 기록을 확인하는 09장 일곱 번째 페이지.',
  },
  en: {
    title: 'Verifying control of media players, autoplay, and background audio — A11y Lab',
    description:
      'Chapter 09, page 7: a short in-house clip in user-started browser media controls, with a working caption track, transcript, error paths, and an asset record.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <MediaPlayerPage locale={await getServerLocale()} />;

export default Page;
