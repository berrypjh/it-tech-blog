'use client';

import { useState } from 'react';
import { ThemeProvider, IconButton } from '@berrypjh/react-ui';

export default function PageClient() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider mode={isDark ? 'dark' : 'global'}>
      <IconButton size="md" onClick={() => setIsDark((v) => !v)} aria-label="Toggle theme">
        {isDark ? 'light' : 'dark'}
      </IconButton>
    </ThemeProvider>
  );
}
