import base from '@berrypjh/eslint-config/base';
import react from '@berrypjh/eslint-config/react';

// 컨텐츠 카드 hover 테두리 변화 금지. 상호작용 요소 안이면 자동 허용.
const INTERACTIVE_TAGS = new Set(['button', 'a', 'Link', 'NextLink']);
const INTERACTIVE_ATTRS = new Set(['onClick', 'onSelect', 'href', 'role']);

const isInteractiveOpening = (opening) => {
  const name = opening.name && opening.name.type === 'JSXIdentifier' ? opening.name.name : '';
  if (INTERACTIVE_TAGS.has(name)) return true;
  return opening.attributes.some(
    (a) => a.type === 'JSXAttribute' && a.name && INTERACTIVE_ATTRS.has(a.name.name),
  );
};

const hasInteractiveAncestor = (node) => {
  for (let cur = node.parent; cur; cur = cur.parent) {
    if (cur.type === 'JSXElement' && cur.openingElement && isInteractiveOpening(cur.openingElement)) {
      return true;
    }
  }
  return false;
};

const hoverPlugin = {
  rules: {
    'no-content-card-border-hover': {
      meta: {
        type: 'problem',
        docs: { description: 'hover 규칙: 컨텐츠 카드는 hover 시 테두리 변화 금지(box=뜸만).' },
        schema: [],
        messages: {
          borderHover:
            'hover 규칙: 컨텐츠 카드는 hover 시 테두리 변화 금지(box=뜸만). 상호작용 컨트롤(button/a/Link/onClick/role)이면 자동 허용됩니다. nav 카드는 shared ToneCard nav를 쓰세요.',
        },
      },
      create(context) {
        const check = (node) => {
          if (!hasInteractiveAncestor(node)) context.report({ node, messageId: 'borderHover' });
        };
        return {
          "MemberExpression[property.name='borderHover']": check,
          'Literal[value=/hover:border-\\[var\\(--term-accent\\)\\]/]': check,
        };
      },
    },
  },
};

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
  // hover 규칙: getting-started + repo-structure에만 적용(그 외 챕터는 미수렴).
  {
    files: ['**/components/getting-started/**/*.tsx', '**/components/repo-structure/**/*.tsx'],
    plugins: { 'rdd-hover': hoverPlugin },
    rules: {
      'rdd-hover/no-content-card-border-hover': 'error',
    },
  },
];
