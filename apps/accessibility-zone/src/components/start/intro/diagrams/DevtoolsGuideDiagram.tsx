import type { Locale } from '@it-tech-blog/preferences';

import { cx, List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    inspect: (
      <>
        아래 <strong>저장</strong> 위에서 오른쪽 클릭 → <strong>검사</strong>
      </>
    ),
    tab: (
      <>
        오른쪽 창에서 <strong>Accessibility</strong> 탭 열기 (안 보이면 » 안에 있습니다)
      </>
    ),
    compare: (
      <>
        <strong>Computed properties</strong>에서 Role · Name 비교
      </>
    ),
    ignored: '버튼으로 잡히지 않아 Role도 Name도 없습니다',
    save: '저장',
    tip: '<button>에서도 이 문구만 보이면 요소가 아니라 body가 선택된 것입니다. 1부터 다시 해 보세요.',
  },
  en: {
    inspect: (
      <>
        Right-click a <strong>Save</strong> below → <strong>Inspect</strong>
      </>
    ),
    tab: (
      <>
        Open the <strong>Accessibility</strong> pane on the right (look under » if hidden)
      </>
    ),
    compare: (
      <>
        Compare Role and Name under <strong>Computed properties</strong>
      </>
    ),
    ignored: 'Not exposed as a button, so it has no role or name',
    save: 'Save',
    tip: 'If <button> also shows only this message, body is selected instead of the element. Start again from step 1.',
  },
};

const tabs = ['Styles', 'Computed', 'Layout', 'Accessibility'];

const notInteresting = 'Element not interesting for accessibility';

const sampleClass =
  'inline-flex select-none items-center rounded-sm bg-primaryBtn-default h-8 px-md text-xsm font-semiBold text-text-contrastText';

const panelClass =
  'col-start-2 w-fit max-w-full rounded-sm border border-stroke-light bg-background-default px-md py-sm';

const Step = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <ListItem className="grid grid-cols-[auto_1fr] items-center gap-x-sm gap-y-sm">
    <span
      className="flex h-6 w-6 items-center justify-center rounded-full bg-primaryBtn-default text-xxsm font-bold text-text-contrastText"
      aria-hidden="true"
    >
      {n}
    </span>
    {children}
  </ListItem>
);

/**
 * DevTools Accessibility 탭에서 button과 div의 Role · Name을 비교하는 세 단계.
 * 이 부분만 읽어도 따라 할 수 있도록 검사할 두 요소와 예상 결과를 단계 안에 둔다.
 */
export const DevtoolsGuideDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const samples = [
    {
      tag: '<button>',
      ok: true,
      result: (
        <>
          <span className="text-text-light">Role </span>
          <strong>button</strong>
          <span className="text-text-light"> · Name </span>
          <strong>&quot;{c.save}&quot;</strong>
        </>
      ),
    },
    {
      tag: '<div>',
      ok: false,
      result: (
        <>
          <strong>{notInteresting}</strong>
          <span className="block text-xxsm text-text-light">{c.ignored}</span>
        </>
      ),
    },
  ];
  const tagClass = (ok: boolean) =>
    cx('font-mono text-xxsm', ok ? 'text-text-success' : 'text-text-error');

  return (
    <List ordered className="mt-md flex flex-col gap-lg">
      <Step n={1}>
        <p>{c.inspect}</p>
        <div className="col-start-2 flex flex-wrap gap-lg">
          {samples.map((s) => (
            <span key={s.tag} className="flex items-center gap-sm">
              <span className={tagClass(s.ok)}>{s.tag}</span>
              {s.ok ? (
                <button type="button" className={sampleClass}>
                  {c.save}
                </button>
              ) : (
                <div className={sampleClass}>{c.save}</div>
              )}
            </span>
          ))}
        </div>
      </Step>

      <Step n={2}>
        <p>{c.tab}</p>
        <p
          className={cx(panelClass, 'flex gap-lg overflow-x-auto text-xxsm text-text-light')}
          aria-hidden="true"
        >
          {tabs.map((tab) => (
            <span
              key={tab}
              className={cx(
                'shrink-0',
                tab === 'Accessibility' && 'font-bold text-text-link underline underline-offset-4',
              )}
            >
              {tab}
            </span>
          ))}
        </p>
      </Step>

      <Step n={3}>
        <p>{c.compare}</p>
        <dl
          className={cx(
            panelClass,
            'grid grid-cols-[auto_1fr] items-baseline gap-x-lg gap-y-sm text-xsm',
          )}
        >
          {samples.map((s) => (
            <div key={s.tag} className="contents">
              <dt className={tagClass(s.ok)}>
                {s.tag} {c.save}
              </dt>
              <dd>{s.result}</dd>
            </div>
          ))}
        </dl>
        <p className="col-start-2 text-xxsm text-text-light">{c.tip}</p>
      </Step>
    </List>
  );
};
