import type { Locale } from '@it-tech-blog/preferences';

import {
  BookOpen,
  Eye,
  FileCheck,
  Headphones,
  Lightbulb,
  type LucideIcon,
  Microscope,
  Scale,
  Wrench,
} from 'lucide-react';

/**
 * 결과 · 설명 옆에 붙이는 출처. 같은 내용이라도 어디서 왔는지에 따라 증명하는 범위가 다르다.
 * 03장은 관찰 출처(model · dom · devtools · at), 04장은 근거 종류(normative · informative · example · observed)를 쓴다.
 */
export type SourceId =
  | 'model'
  | 'dom'
  | 'devtools'
  | 'at'
  | 'normative'
  | 'informative'
  | 'example'
  | 'observed';

const sources: Record<SourceId, { icon: LucideIcon; ko: string; en: string }> = {
  model: { icon: BookOpen, ko: '교육용 모델', en: 'Teaching model' },
  dom: { icon: Eye, ko: '실제 DOM 관찰', en: 'Real DOM observation' },
  devtools: { icon: Wrench, ko: '브라우저 도구 검사', en: 'Browser tool inspection' },
  at: { icon: Headphones, ko: '실제 보조기술', en: 'Real assistive technology' },
  normative: { icon: Scale, ko: '규범 원문', en: 'Normative text' },
  informative: { icon: FileCheck, ko: '보충 설명', en: 'Informative guidance' },
  example: { icon: Lightbulb, ko: '교육 예시', en: 'Teaching example' },
  observed: { icon: Microscope, ko: '실제 관찰 근거', en: 'Real observation' },
};

/** 출처 꼬리표. 뜻은 글자가 전달하므로 아이콘은 숨긴다. */
export const SourceTag = ({ locale, id }: { locale: Locale; id: SourceId }) => {
  const Icon = sources[id].icon;
  return (
    <span className="inline-flex items-center gap-xs whitespace-nowrap rounded-xs border border-stroke-light px-xs text-xxsm font-semiBold text-text-light">
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {sources[id][locale]}
    </span>
  );
};
