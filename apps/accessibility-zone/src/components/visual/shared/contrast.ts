import { getContrastRatio, WCAG } from '@it-tech-blog/utils';

export type ContrastTarget = 'text' | 'largeText' | 'nonText';

/** 대상별 최소 대비. 어떤 대상이 적용되는지는 사람이 사례마다 판단한다. */
export const requiredRatio: Record<ContrastTarget, number> = {
  text: WCAG.AA_NORMAL,
  largeText: WCAG.AA_LARGE,
  nonText: WCAG.AA_LARGE,
};

/** getContrastRatio가 올바르게 계산하는 불투명 #RRGGBB인지 확인한다. */
export const isOpaqueHex = (value: string) => /^#[0-9a-f]{6}$/i.test(value);

/** 두 색의 대비를 판정한다. 판정은 반올림하지 않은 원래 값으로 한다. 형식이 틀리면 null. */
export const checkContrast = (foreground: string, background: string, target: ContrastTarget) => {
  if (!isOpaqueHex(foreground) || !isOpaqueHex(background)) return null;
  const ratio = getContrastRatio(foreground, background);
  const required = requiredRatio[target];
  return { ratio, required, passes: ratio >= required };
};

/** 표시용 값. 올림으로 기준을 넘은 것처럼 보이지 않게 소수 셋째 자리에서 버린다. */
export const formatRatio = (ratio: number) => (Math.floor(ratio * 100) / 100).toFixed(2);
