import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ConnectionTable } from '../components/ConnectionTable';
import { JsxFiberDiagram } from '../components/JsxFiberDiagram';
import type { FiberTreePointersContent } from '../content';
import { NetworkIcon } from '../icons';

type Props = { content: FiberTreePointersContent['conversion'] };

const PANEL = cn(
  'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
  'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
);

export const JsxToFiberConnection = ({ content }: Props) => (
  <section id="conversion" aria-labelledby="heading-conversion" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="conversion"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      <CodePreviewPanel
        code={content.jsx}
        caption="snippet.jsx"
        language={content.jsxLabel}
        size="sm"
      />

      <div className={PANEL}>
        <h3 className="mb-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.diagramLabel}`}
        </h3>
        <JsxFiberDiagram nodes={content.diagramNodes} />
      </div>

      <div className={PANEL}>
        <ConnectionTable
          wide
          label={content.tableLabel}
          childSiblingRows={content.childSiblingRows}
          returnRows={content.returnRows}
        />
      </div>
    </div>
  </section>
);
