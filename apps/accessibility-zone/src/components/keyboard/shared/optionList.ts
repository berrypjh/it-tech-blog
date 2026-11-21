export type ListOption = { id: string; label: string };

/** 단일 선택 목록의 상태. 활성 항목(키보드가 가리키는 곳)과 선택값은 서로 다른 값이다. */
export type ListState = {
  options: ListOption[];
  activeId: string | null;
  selectedId: string | null;
};

export type ListMove = 'next' | 'previous' | 'first' | 'last';

export const createList = (options: ListOption[]): ListState => ({
  options,
  activeId: options[0]?.id ?? null,
  selectedId: null,
});

/** 지운 항목의 다음 → 이전 → 없음 순서로 이어받을 대상을 고른다. */
export const neighborAfterRemoval = (ids: string[], removedId: string) => {
  const index = ids.indexOf(removedId);
  return ids[index + 1] ?? ids[index - 1] ?? null;
};

/** 다시 들어올 때의 활성 항목: APG Listbox대로 선택 항목, 없으면 첫 항목. */
export const settleOnEntry = (state: ListState): ListState => ({
  ...state,
  activeId: state.selectedId ?? state.options[0]?.id ?? null,
});

/** 방향키 · Home · End 이동. 목록 끝에서는 돌아가지 않고 멈춘다. */
export const moveActive = (state: ListState, move: ListMove): ListState => {
  const ids = state.options.map((option) => option.id);
  const index = ids.indexOf(state.activeId ?? '');
  const target = {
    next: Math.min(index + 1, ids.length - 1),
    previous: Math.max(index - 1, 0),
    first: 0,
    last: ids.length - 1,
  }[move];
  return { ...state, activeId: ids[target] ?? null };
};

/** 현재 활성 항목 다음부터 그 글자로 시작하는 항목을 찾는다. 없으면 null. */
export const findByCharacter = (state: ListState, character: string) => {
  const index = state.options.findIndex((option) => option.id === state.activeId);
  const ordered = [...state.options.slice(index + 1), ...state.options.slice(0, index + 1)];
  const wanted = character.toLocaleLowerCase();
  return ordered.find((option) => option.label.toLocaleLowerCase().startsWith(wanted))?.id ?? null;
};

/** 활성 항목을 선택한다. 활성 항목이 목록에 없으면 아무것도 바꾸지 않는다. */
export const selectActive = (state: ListState): ListState =>
  state.options.some((option) => option.id === state.activeId)
    ? { ...state, selectedId: state.activeId }
    : state;

/** 항목을 지운다. recoverActive가 false면 활성 항목을 고치지 않는 결함을 재현한다. */
export const removeOption = (state: ListState, id: string, recoverActive = true): ListState => {
  const neighbor = neighborAfterRemoval(
    state.options.map((option) => option.id),
    id,
  );
  return {
    options: state.options.filter((option) => option.id !== id),
    activeId: recoverActive && state.activeId === id ? neighbor : state.activeId,
    selectedId: state.selectedId === id ? null : state.selectedId,
  };
};
