import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../element-jsx/_shared/CodePanel';
import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { FiberRoleRow } from '../components/FiberRoleRow';
import type { FiberNodeOverviewContent } from '../content';
import { ListTreeIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['preview'] };

export const FiberStructurePreview = ({ content }: Props) => (
  <section id="preview" aria-labelledby="heading-preview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="preview"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-md lg:gap-lg items-start">
      <div className="min-w-0">
        <CodePanel code={content.code} caption="fiber.ts" language="TS" size="sm" />
      </div>

      <div className="min-w-0 flex flex-col gap-sm">
        <h3
          className={cn(
            'text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]',
            'flex items-center gap-2 before:content-[""] before:block before:h-px before:flex-1 before:bg-[var(--term-border)] after:content-[""] after:block after:h-px after:flex-1 after:bg-[var(--term-border)]',
          )}
        >
          <span className="px-2 text-sky-700 dark:text-sky-300 font-bold">
            {content.roleHeading}
          </span>
        </h3>

        <ul className="flex flex-col gap-2">
          {content.roles.map((role) => (
            <li key={role.id}>
              <FiberRoleRow role={role} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
