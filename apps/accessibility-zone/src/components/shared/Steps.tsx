import { List, ListItem } from '@berrypjh/react-ui';

/** 따라 하는 절차처럼 순서가 뜻을 갖는 번호 목록. */
export const Steps = ({ items }: { items: React.ReactNode[] }) => (
  <List ordered className="flex list-decimal flex-col gap-xs pl-xl">
    {items.map((item, i) => (
      <ListItem key={i}>{item}</ListItem>
    ))}
  </List>
);
