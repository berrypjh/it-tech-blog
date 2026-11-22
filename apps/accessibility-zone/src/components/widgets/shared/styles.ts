/** 12장 예제의 버튼형 컨트롤. 눌림 · 선택 · 펼침 상태는 테두리와 굵기로도 드러내고, 색에만 기대지 않는다. */
export const controlClass =
  'inline-flex items-center gap-sm rounded-sm border border-stroke-light px-md py-xs text-xsm text-text-default hover:border-stroke-primary aria-pressed:border-stroke-primary aria-pressed:font-bold aria-selected:border-stroke-primary aria-selected:font-bold aria-checked:border-stroke-primary aria-checked:font-bold aria-expanded:font-bold';

export const cardClass = 'flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm';
export const cardTitleClass = 'text-xsm font-semiBold text-text-default';
