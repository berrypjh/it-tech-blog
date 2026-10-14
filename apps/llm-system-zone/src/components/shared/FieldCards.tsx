import { List, ListItem } from '@berrypjh/react-ui';

type Item = { name: string; fields: { label: string; value: string }[] };

/** 이름 아래에 라벨과 값 쌍을 나열한 카드 목록. 표 대신 쓰는 정적 서버 컴포넌트다. */
export const FieldCards = ({ items, single = false }: { items: Item[]; single?: boolean }) => (
  <List
    className={`my-lg grid grid-cols-1 gap-sm leading-normal ${single ? '' : 'sm:grid-cols-2'}`}
  >
    {items.map((item) => (
      <ListItem
        key={item.name}
        className="flex flex-col gap-sm rounded-md border border-stroke-light bg-background-surface p-md"
      >
        <p className="text-xsm font-semiBold text-text-default">{item.name}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs border-t border-stroke-light pt-sm text-xxsm">
          {item.fields.map((field) => (
            <div key={field.label} className="contents">
              <dt className="text-text-light">{field.label}</dt>
              <dd className="break-keep text-text-default">{field.value}</dd>
            </div>
          ))}
        </dl>
      </ListItem>
    ))}
  </List>
);
