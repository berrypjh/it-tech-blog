'use client';

import { useEffect, useId, useState } from 'react';

import { useMotion } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { controlClass } from '@/components/widgets/shared/styles';

/** 자동 넘김의 간격. 사용자가 시작했을 때만 쓴다. */
export const ROTATE_MS = 4000;

export type Slide = { title: string; text: string; detail: string };

const content = {
  ko: {
    carousel: '캐러셀',
    slide: '슬라이드',
    empty: '표시할 안내가 없습니다.',
    start: '자동 넘김 시작',
    stop: '자동 넘김 정지',
    reduced: '모션 줄이기 설정에서는 자동 넘김을 제공하지 않습니다.',
    previous: '이전 안내',
    next: '다음 안내',
    position: (n: number, total: number) => `${total}개 중 ${n}번째`,
    detail: '세부 설명',
  },
  en: {
    carousel: 'carousel',
    slide: 'slide',
    empty: 'There is no guide to show.',
    start: 'Start automatic rotation',
    stop: 'Stop automatic rotation',
    reduced: 'Automatic rotation is not offered with the reduced motion setting.',
    previous: 'Previous guide',
    next: 'Next guide',
    position: (n: number, total: number) => `${n} of ${total}`,
    detail: 'Details',
  },
};

/**
 * 한 번에 한 안내만 보이는 캐러셀. 보이지 않는 안내는 hidden이라 읽기 경로와 Tab 순서에 없다.
 * 자동 넘김은 사용자가 시작했을 때만 돌고, 넘김 버튼 밖의 요소가 초점을 받거나 이전 · 다음을 누르면 멈춘 채로 남는다.
 * 포인터가 안내 위에 있는 동안에는 잠시 멈춘다. 모션 줄이기 설정에서는 자동 넘김을 내놓지 않는다.
 * 안내가 하나면 이동 버튼을, 없으면 모든 조작을 두지 않는다.
 */
export const Carousel = ({
  label,
  slides,
  rotation = false,
}: {
  label: string;
  slides: Slide[];
  rotation?: boolean;
}) => {
  const c = useLang(content);
  const id = useId();
  const { motion } = useMotion();
  const [osReduce, setOsReduce] = useState(false);
  const [index, setIndex] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [hovered, setHovered] = useState(false);
  const total = slides.length;
  const current = Math.min(index, Math.max(total - 1, 0));
  const several = total > 1;
  const reduce = motion === 'reduce' || osReduce;
  const running = rotation && several && !reduce && rotating && !hovered;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setOsReduce(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(
      () => setIndex((n) => (Math.min(n, total - 1) + 1) % total),
      ROTATE_MS,
    );
    return () => clearInterval(timer);
  }, [running, total]);

  const go = (delta: number) => {
    setRotating(false);
    setIndex((current + delta + total) % total);
  };

  return (
    <section
      aria-roledescription={c.carousel}
      aria-label={label}
      className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      onFocus={(event) => {
        if (event.target.id !== `${id}-rotation`) setRotating(false);
      }}
    >
      {total === 0 ? (
        <p className="text-text-light">{c.empty}</p>
      ) : (
        <>
          {several && (
            <div className="flex flex-wrap items-center gap-sm">
              {rotation && !reduce && (
                <button
                  type="button"
                  id={`${id}-rotation`}
                  onClick={() => setRotating(!rotating)}
                  className={controlClass}
                >
                  {rotating ? c.stop : c.start}
                </button>
              )}
              <button type="button" onClick={() => go(-1)} className={controlClass}>
                {c.previous}
              </button>
              <button type="button" onClick={() => go(1)} className={controlClass}>
                {c.next}
              </button>
              <p className="text-text-light">{c.position(current + 1, total)}</p>
            </div>
          )}
          {rotation && several && reduce && <p className="text-text-light">{c.reduced}</p>}
          <div
            aria-live={running ? 'off' : 'polite'}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                role="group"
                aria-roledescription={c.slide}
                aria-label={`${c.position(i + 1, total)}: ${slide.title}`}
                hidden={i !== current}
                className="flex flex-col gap-sm"
              >
                <h3 className="font-semiBold text-text-default">{slide.title}</h3>
                <p>{slide.text}</p>
                <details className="rounded-sm border border-stroke-light p-sm">
                  <summary className="cursor-pointer font-semiBold text-text-default">
                    {slide.title} {c.detail}
                  </summary>
                  <p className="mt-sm">{slide.detail}</p>
                </details>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
