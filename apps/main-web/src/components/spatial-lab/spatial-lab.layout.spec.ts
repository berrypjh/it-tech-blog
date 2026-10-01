import { describe, expect, it } from 'vitest';

import { getConnector, getPlacement, MODULE_RING } from './spatial-lab.layout';

describe('getPlacement', () => {
  it('places two modules on the left and right of the core', () => {
    const [left, right] = [getPlacement(0, 2), getPlacement(1, 2)];
    expect(left.x).toBeCloseTo(50 - MODULE_RING.rx);
    expect(right.x).toBeCloseTo(50 + MODULE_RING.rx);
    expect(left.y).toBeCloseTo(50);
    expect(right.y).toBeCloseTo(50);
  });

  it('keeps every module inside the stage', () => {
    for (let index = 0; index < 11; index++) {
      const { x, y, depth } = getPlacement(index, 11);
      expect(x).toBeGreaterThan(0);
      expect(x).toBeLessThan(100);
      expect(y).toBeGreaterThan(0);
      expect(y).toBeLessThan(100);
      expect(Math.abs(depth)).toBeLessThanOrEqual(1);
    }
  });

  it('brings lower modules closer to the viewer', () => {
    const upper = getPlacement(1, 4);
    const lower = getPlacement(3, 4);
    expect(lower.y).toBeGreaterThan(upper.y);
    expect(lower.depth).toBeGreaterThan(upper.depth);
  });
});

describe('hydration-safe output', () => {
  it('rounds every coordinate to three decimals', () => {
    const isRounded = (value: number) => Number(value.toFixed(3)) === value;
    for (let index = 0; index < 11; index++) {
      const { x, y, depth } = getPlacement(index, 11);
      const { x1, y1, x2, y2 } = getConnector(index, 11);
      [x, y, depth, x1, y1, x2, y2].forEach((value) => expect(isRounded(value)).toBe(true));
    }
  });
});

describe('getConnector', () => {
  it('points from the core toward its module', () => {
    const placement = getPlacement(0, 2);
    const { x1, x2 } = getConnector(0, 2);
    expect(x1).toBeGreaterThan(x2);
    expect(x2).toBeGreaterThan(placement.x);
  });
});
