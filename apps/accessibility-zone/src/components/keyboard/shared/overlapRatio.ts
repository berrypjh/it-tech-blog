/** 두 사각형이 겹치는 면적이 첫 사각형에서 차지하는 비율. */
export const overlapRatio = (item: DOMRect, cover: DOMRect) => {
  const width = Math.min(item.right, cover.right) - Math.max(item.left, cover.left);
  const height = Math.min(item.bottom, cover.bottom) - Math.max(item.top, cover.top);
  return (Math.max(width, 0) * Math.max(height, 0)) / (item.width * item.height);
};
