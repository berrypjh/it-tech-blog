'use client';

import { createContext, useCallback, useContext, useState } from 'react';

export type Motion = 'default' | 'reduce';

interface MotionContextValue {
  motion: Motion;
  setMotion: (motion: Motion) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

export const useMotion = () => {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used within MotionProvider');
  return ctx;
};

export const MotionProvider = ({
  children,
  defaultMotion = 'default',
}: {
  children: React.ReactNode;
  defaultMotion?: Motion;
}) => {
  const [motion, setMotionState] = useState<Motion>(defaultMotion);

  const setMotion = useCallback((value: Motion) => {
    setMotionState(value);
    document.cookie = `motion=${value};path=/;max-age=31536000`;

    if (value === 'reduce') {
      document.documentElement.dataset.motion = 'reduce';
    } else {
      delete document.documentElement.dataset.motion;
    }
  }, []);

  return <MotionContext.Provider value={{ motion, setMotion }}>{children}</MotionContext.Provider>;
};
