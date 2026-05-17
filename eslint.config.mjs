import base from '@berrypjh/eslint-config/base';
import react from '@berrypjh/eslint-config/react';

export default [
  ...base,
  ...react,
  {
    ignores: ['**/dist', '**/out-tsc', '**/test-output', '**/.next'],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Side effect imports (e.g. import 'polyfill')
            ['^\\u0000'],
            // 2. Node.js builtins
            ['^node:'],
            // 3. React / Next.js
            ['^react(/|$)', '^next(/|$)'],
            // 4. Workspace packages (@it-tech-blog/*)
            ['^@it-tech-blog/'],
            // 5. 그 외 외부 패키지 (@berrypjh, @nx, @playwright 등)
            ['^@?\\w'],
            // 6. 앱 내부 절대 경로 별칭 (@/...)
            ['^@/'],
            // 7. 부모 경로 (../)
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 8. 같은/하위 디렉터리 (./)
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // 9. 스타일 파일
            ['^.+\\.s?css$'],
          ],
        },
      ],
    },
  },
];
