import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    traitLabel: '성격',
    verifyLabel: '검증 수단',
    columns: [
      {
        title: '코드와 시스템',
        lead: '규칙이 명확한 작업',
        items: ['형식 검사', '값 계산', '권한 확인', '상태 전이'],
        trait: '같은 입력에 같은 결과가 나오고, 단위 테스트로 경계를 닫을 수 있습니다',
        verify: null as string | null,
        model: false,
      },
      {
        title: '모델',
        lead: '규칙으로 쓰기 어려운 작업',
        items: ['요청 해석', '문장 생성', '의미 분류', '정보 추출'],
        trait: '오답 가능성을 안고 가므로 작업마다 검증 전략이 함께 필요합니다',
        verify: '스키마 검증 · 근거 문서와의 대조 · 사람 검토 · 평가 데이터',
        model: true,
      },
    ],
  },
  en: {
    traitLabel: 'Nature',
    verifyLabel: 'Verification',
    columns: [
      {
        title: 'Code and the system',
        lead: 'Tasks with clear rules',
        items: ['Format check', 'Value calculation', 'Permission check', 'State transition'],
        trait: 'The same input gives the same result, and unit tests can close the boundaries',
        verify: null as string | null,
        model: false,
      },
      {
        title: 'Model',
        lead: 'Tasks hard to write as rules',
        items: ['Interpretation', 'Text generation', 'Semantic classification', 'Extraction'],
        trait: 'It carries a chance of being wrong, so each task needs a verification strategy',
        verify:
          'Schema validation · comparing with source documents · human review · evaluation data',
        model: true,
      },
    ],
  },
};

/** 규칙이 명확한 작업은 코드와 시스템이, 규칙으로 쓰기 어려운 작업은 검증과 함께 모델이 맡는 구분을 두 칸으로 보여 준다. 서버 컴포넌트다. */
export const ResponsibilitySplit = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <List className="my-lg grid grid-cols-1 gap-sm leading-normal sm:grid-cols-2">
      {c.columns.map((column) => (
        <ListItem
          key={column.title}
          className={`flex flex-col gap-sm rounded-md border bg-background-surface p-md ${
            column.model ? 'border-stroke-primary' : 'border-stroke-light'
          }`}
        >
          <div>
            <p className="text-xsm font-semiBold text-text-default">{column.title}</p>
            <p className="text-xxsm text-text-light">{column.lead}</p>
          </div>
          <ul className="flex flex-wrap gap-xs">
            {column.items.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-stroke-light px-sm py-2xs text-xxsm text-text-default"
              >
                {item}
              </li>
            ))}
          </ul>
          <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs border-t border-stroke-light pt-sm text-xxsm">
            <dt className="text-text-light">{c.traitLabel}</dt>
            <dd className="break-keep text-text-default">{column.trait}</dd>
            {column.verify && (
              <>
                <dt className="text-text-light">{c.verifyLabel}</dt>
                <dd className="break-keep font-semiBold text-text-default">{column.verify}</dd>
              </>
            )}
          </dl>
        </ListItem>
      ))}
    </List>
  );
};
