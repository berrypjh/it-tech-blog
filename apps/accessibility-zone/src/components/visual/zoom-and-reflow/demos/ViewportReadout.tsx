'use client';

import { useEffect, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Reading = { width: number; height: number; ratio: number; scale: number | null };

const content = {
  ko: {
    title: '지금 브라우저의 값',
    width: 'CSS viewport 폭 (window.innerWidth)',
    height: 'CSS viewport 높이 (window.innerHeight)',
    ratio: 'window.devicePixelRatio',
    scale: 'visualViewport.scale (핀치 확대)',
    none: '(읽지 못함)',
    note: 'devicePixelRatio는 화면 밀도의 영향도 받으므로 그 값만으로 확대 비율을 단정하지 않습니다.',
  },
  en: {
    title: 'Values in this browser now',
    width: 'CSS viewport width (window.innerWidth)',
    height: 'CSS viewport height (window.innerHeight)',
    ratio: 'window.devicePixelRatio',
    scale: 'visualViewport.scale (pinch zoom)',
    none: '(not available)',
    note: 'devicePixelRatio also depends on screen density, so do not infer the zoom level from it alone.',
  },
};

const read = (): Reading => ({
  width: window.innerWidth,
  height: window.innerHeight,
  ratio: window.devicePixelRatio,
  scale: window.visualViewport?.scale ?? null,
});

/** 크기 변경 때 viewport 값을 다시 읽어 보여 준다. 값을 바꾸지는 않는다. */
export const ViewportReadout = () => {
  const c = useLang(content);
  const [reading, setReading] = useState<Reading | null>(null);

  useEffect(() => {
    const update = () => setReading(read());
    update();
    window.addEventListener('resize', update);
    window.visualViewport?.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('resize', update);
    };
  }, []);

  return (
    <ObservedPanel
      title={c.title}
      rows={[
        [c.width, reading ? `${reading.width}px` : c.none],
        [c.height, reading ? `${reading.height}px` : c.none],
        [c.ratio, reading?.ratio ?? c.none],
        [c.scale, reading?.scale ?? c.none],
      ]}
    >
      <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
    </ObservedPanel>
  );
};
