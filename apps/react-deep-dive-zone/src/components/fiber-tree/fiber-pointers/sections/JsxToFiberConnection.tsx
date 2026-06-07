import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { ConnectionTable } from '../components/ConnectionTable';
import { JsxFiberDiagram } from '../components/JsxFiberDiagram';
import type { FiberTreePointersContent } from '../content';
import { NetworkIcon } from '../icons';

type Props = { content: FiberTreePointersContent['conversion'] };

export const JsxToFiberConnection = ({ content }: Props) => (
  <section id="conversion" aria-labelledby="heading-conversion" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="conversion"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.42fr)_minmax(0,_0.26fr)] gap-md lg:gap-lg items-start">
        <div className="min-w-0">
          <CodePreviewPanel
            code={content.jsx}
            caption="snippet.jsx"
            language={content.jsxLabel}
            size="sm"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-2">
            {`// ${content.diagramLabel}`}
          </h3>
          <JsxFiberDiagram nodes={content.diagramNodes} />
        </div>

        <div className="min-w-0">
          <ConnectionTable
            label={content.tableLabel}
            childSiblingRows={content.childSiblingRows}
            returnRows={content.returnRows}
          />
        </div>
      </div>
    </div>
  </section>
);
