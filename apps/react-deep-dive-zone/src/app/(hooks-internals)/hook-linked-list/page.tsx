import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hookLinkedListContent,
  HookLinkedListPage,
} from '@/components/hooks-internals/hook-linked-list';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hookLinkedListContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Hook Linked List: How Hooks Are Stored on a Fiber — React Lab'
        : 'Hook linked list: Hooks가 Fiber에 저장되는 방식 — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HookLinkedListPage locale={locale} />;
};

export default Page;
