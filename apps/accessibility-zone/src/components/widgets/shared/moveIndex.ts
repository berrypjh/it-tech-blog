export type Axis = 'horizontal' | 'vertical';

const steps: Record<Axis, Record<string, number>> = {
  horizontal: { ArrowRight: 1, ArrowLeft: -1 },
  vertical: { ArrowDown: 1, ArrowUp: -1 },
};

/**
 * 탭 · 메뉴 · 도구 모음이 함께 쓰는 항목 이동. 축에 맞는 화살표는 끝에서 처음으로 돌아가고, Home · End는 처음 · 끝으로 간다.
 * 맡지 않는 키에는 null을 돌려주어 호출한 쪽이 기본 동작을 그대로 두게 한다.
 * (07.5의 optionList는 끝에서 멈추는 Listbox 규칙이라 따로 둔다.)
 */
export const moveIndex = (pressed: string, index: number, count: number, axis: Axis) => {
  if (count === 0) return null;
  if (pressed === 'Home') return 0;
  if (pressed === 'End') return count - 1;
  const step = steps[axis][pressed];
  return step === undefined ? null : (index + step + count) % count;
};
