import type { Locale } from '@it-tech-blog/preferences';

import type { TocItem } from './Toc';

/** 섹션 키별 id와 로케일별 제목으로 목차 함수를 만든다. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const tocOf =
  <K extends string>(ids: Record<K, string>, titles: Record<Locale, Record<K, string>>) =>
  (locale: Locale) =>
    Object.fromEntries(
      (Object.keys(ids) as K[]).map((key) => [key, { id: ids[key], title: titles[locale][key] }]),
    ) as Record<K, TocItem>;

/** 출처와 제목이 언어와 무관할 때 쓴다. */
export const same = (text: string) => ({ ko: text, en: text });
