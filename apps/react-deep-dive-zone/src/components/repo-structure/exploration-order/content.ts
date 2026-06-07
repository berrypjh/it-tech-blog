import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';
import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IconName =
  | 'folder'
  | 'package'
  | 'code'
  | 'check'
  | 'tag'
  | 'folderOpen'
  | 'search'
  | 'fileCode'
  | 'clipboard'
  | 'workflow'
  | 'fileText';

export type HeroFlowNode = {
  id: 'root' | 'packages' | 'code' | 'tests' | 'releases';
  title: string;
  subtitle: string;
  icon: IconName;
  tone: ToneKey;
};

export type RoutineStep = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type ExplorationContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    flowNodes: HeroFlowNode[];
    summaryLine: string[];
  };
  routine: {
    eyebrow: string;
    title: string;
    description: string;
    steps: RoutineStep[];
  };
  finale: FinaleBannerContent;
};

export const explorationContent: Record<Locale, ExplorationContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 10/10단계',
      title: {
        line1: '이제 React 저장소를',
        line2: '처음부터 헤매지 않고',
        line3: '탐색할 수 있습니다.',
      },
      description:
        '폴더를 외우는 것이 아니라, 질문을 들고 올바른 경로로 이동하는 감각이 중요합니다.',
      primaryCta: '전체 로드맵 보기',
      secondaryCta: 'React GitHub 열기',
      primaryHref: '#section-routine',
      repoUrl: 'https://github.com/facebook/react',
      flowNodes: [
        {
          id: 'root',
          title: 'Root',
          subtitle: '저장소 루트',
          icon: 'folder',
          tone: 'blue',
        },
        {
          id: 'packages',
          title: 'Packages',
          subtitle: '핵심 패키지',
          icon: 'package',
          tone: 'indigo',
        },
        {
          id: 'code',
          title: 'Code',
          subtitle: '구현 코드',
          icon: 'code',
          tone: 'violet',
        },
        {
          id: 'tests',
          title: 'Tests',
          subtitle: '테스트 코드',
          icon: 'check',
          tone: 'teal',
        },
        {
          id: 'releases',
          title: 'Releases',
          subtitle: '변경 기록',
          icon: 'tag',
          tone: 'emerald',
        },
      ],
      summaryLine: ['질문', '탐색', '이해', '검증', '맥락'],
    },
    routine: {
      eyebrow: '01 · 7-step final exploration routine',
      title: '최종 탐색 루틴 7단계',
      description: '앞선 9개 페이지를 실제 저장소 탐색 행동 7단계로 압축했습니다.',
      steps: [
        {
          number: '1',
          title: '루트 구조 확인',
          description: 'README, 폴더 구조, 주요 디렉터리 역할 파악',
          icon: 'folderOpen',
        },
        {
          number: '2',
          title: 'packages 안 핵심 패키지 찾기',
          description: 'react, react-dom, react-reconciler, scheduler, shared',
          icon: 'search',
        },
        {
          number: '3',
          title: '궁금한 API의 public entry 보기',
          description: '각 패키지의 공개 API 진입점을 먼저 확인',
          icon: 'code',
        },
        {
          number: '4',
          title: '내부 구현 파일로 내려가기',
          description: '실제 동작이 구현된 핵심 파일로 이동',
          icon: 'fileCode',
        },
        {
          number: '5',
          title: '관련 테스트 파일 찾기',
          description: '동작 보장 조건과 edge case 확인',
          icon: 'clipboard',
        },
        {
          number: '6',
          title: 'Releases / CHANGELOG로 버전 맥락 확인',
          description: '최신 변경 내용과 변화 흐름 이해',
          icon: 'tag',
        },
        {
          number: '7',
          title: '흐름도를 직접 그리기',
          description: '이해한 내용을 구조화하여 정리',
          icon: 'workflow',
        },
      ],
    },
    finale: {
      progressLabel: '2/15 챕터 완료',
      copyLine1: '저장소 구조를 읽는',
      copyLine2: '준비가 끝났습니다.',
      copyLine3: '이제 패키지 내부로 들어갑니다.',
      primaryCta: 'React 패키지 구조와 역할 읽기',
      primaryHref: '/react-package',
      secondaryCta: '저장소 구조 처음부터 다시 보기',
      secondaryHref: '/repo-overview',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 10/10',
      title: {
        line1: 'You can now explore the React repository',
        line2: 'without getting lost',
        line3: 'from the very first click.',
      },
      description:
        'It is not about memorising folders — it is about carrying a question and following the right path.',
      primaryCta: 'See the full roadmap',
      secondaryCta: 'Open React on GitHub',
      primaryHref: '#section-routine',
      repoUrl: 'https://github.com/facebook/react',
      flowNodes: [
        {
          id: 'root',
          title: 'Root',
          subtitle: 'Repo root',
          icon: 'folder',
          tone: 'blue',
        },
        {
          id: 'packages',
          title: 'Packages',
          subtitle: 'Core packages',
          icon: 'package',
          tone: 'indigo',
        },
        {
          id: 'code',
          title: 'Code',
          subtitle: 'Implementation',
          icon: 'code',
          tone: 'violet',
        },
        {
          id: 'tests',
          title: 'Tests',
          subtitle: 'Test code',
          icon: 'check',
          tone: 'teal',
        },
        {
          id: 'releases',
          title: 'Releases',
          subtitle: 'Change log',
          icon: 'tag',
          tone: 'emerald',
        },
      ],
      summaryLine: ['Question', 'Explore', 'Understand', 'Verify', 'Context'],
    },
    routine: {
      eyebrow: '01 · 7-step final exploration routine',
      title: '7-step final exploration routine',
      description:
        'The whole chapter is compressed into seven actions you can apply directly to the repo.',
      steps: [
        {
          number: '1',
          title: 'Check the root structure',
          description: 'Read README, scan the folders, learn the main directory roles.',
          icon: 'folderOpen',
        },
        {
          number: '2',
          title: 'Find core packages inside packages/',
          description: 'react, react-dom, react-reconciler, scheduler, shared.',
          icon: 'search',
        },
        {
          number: '3',
          title: 'Open the public entry of the API you care about',
          description: 'Each package has a public entry — start there first.',
          icon: 'code',
        },
        {
          number: '4',
          title: 'Descend into the implementation file',
          description: 'Move down into the core file where the real logic lives.',
          icon: 'fileCode',
        },
        {
          number: '5',
          title: 'Find the related test file',
          description: 'Confirm guaranteed behaviour and edge cases.',
          icon: 'clipboard',
        },
        {
          number: '6',
          title: 'Check version context in Releases / CHANGELOG',
          description: 'Understand recent changes and the long-term flow.',
          icon: 'tag',
        },
        {
          number: '7',
          title: 'Draw a flow diagram yourself',
          description: 'Structure what you understood into a personal map.',
          icon: 'workflow',
        },
      ],
    },
    finale: {
      progressLabel: 'Chapter 2 of 15 complete',
      copyLine1: 'You are ready to read',
      copyLine2: 'the repository structure.',
      copyLine3: 'Now step inside the packages.',
      primaryCta: 'Read React package structure & roles',
      primaryHref: '/react-package',
      secondaryCta: 'Review the structure from the start',
      secondaryHref: '/repo-overview',
    },
  },
};
