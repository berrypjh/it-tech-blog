# preferences 패키지

사용자 설정을 앱 간에 공유하는 패키지. 쿠키 기반으로 SSR과 클라이언트 상태를 동기화한다.

## 구조

```
src/
├── theme/           # 테마 (dark/light)
├── locale/          # 언어 (ko/en)
├── font-size/       # 글자 크기 (sm/md/lg)
├── font-family/     # 폰트 (sans/serif/mono)
├── motion/          # 모션 (default/reduce)
├── server/          # 서버 쿠키 읽기 — getServer*()
└── index.ts         # 전체 export
```

## 각 설정의 DOM 적용 방식

| 설정 | DOM 속성 | 기본값 |
|---|---|---|
| theme | `html.className` | `dark` |
| locale | `html.lang` | `ko` |
| fontSize | `html[data-font-size]` | `md` (속성 없음) |
| fontFamily | `html[data-font]` | `sans` (속성 없음) |
| motion | `html[data-motion]` | `default` (속성 없음) |

기본값은 HTML 속성을 생략한다. CSS는 속성이 있을 때만 오버라이드하는 방식.

## 패턴

모든 설정은 동일한 패턴을 따른다.

```ts
// 1. 클라이언트: Provider + hook
const [value, setValue] = useState<T>(defaultValue);
const set = useCallback((v: T) => {
  setValue(v);
  document.cookie = `key=${v};path=/;max-age=31536000`;
  document.documentElement.dataset.key = v; // 또는 className
}, []);

// 2. 서버: 쿠키 읽기
export const getServerX = async () =>
  ((await cookies()).get('key')?.value ?? 'default') as T;
```

## ThemeProvider 특이사항

`prefers-color-scheme` 대응을 위해 초기 상태를 `defaultTheme`이 아닌 DOM에서 읽는다.

```ts
useState<Theme>(() => {
  if (typeof window !== 'undefined') {
    const cls = document.documentElement.className;
    if (cls === 'dark' || cls === 'light') return cls as Theme;
  }
  return defaultTheme;
});
```

layout.tsx의 인라인 스크립트가 쿠키 없는 첫 방문 시 DOM class를 OS 설정으로 바꾸기 때문에 이 동기화가 필요하다.

## 새 설정 추가 6단계

1. `src/<name>/index.tsx` 생성 — Provider + hook + type
2. `src/index.ts` export 추가
3. `src/server/index.ts` — `getServer<Name>()` 추가
4. 앱 `global.css` — `html[data-<name>="..."]` CSS 추가
5. 앱 `layout.tsx` — Provider 추가, `<html>` 속성 주입
6. `SettingsPopover.tsx` — UI 섹션 추가
