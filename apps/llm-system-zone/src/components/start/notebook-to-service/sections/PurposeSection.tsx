import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const JUPYTER = 'https://jupyter-notebook.readthedocs.io/en/stable/notebook.html';

const content = {
  ko: {
    intro: (
      <>
        01-06에서 성공 기준과 사례를 정했습니다. 이제 그 기준으로 후보를 시험하는 일이 필요하고, 그
        자리가 Notebook입니다. <ExternalLink href={JUPYTER}>Jupyter 문서</ExternalLink>는 notebook
        문서가 &quot;대화형 세션의 입력과 출력&quot;을 담으며 셀의 연속으로 구성되고, 열린
        notebook은 하나의 커널과 연결된다고 설명합니다.
      </>
    ),
    purpose:
      '이 구조가 탐색에 맞습니다. 데이터를 보고, 가설을 바꾸고, 결과를 비교하고, 설명을 같은 문서에 적는 일을 한 곳에서 반복할 수 있습니다. 목적이 탐색이므로 Notebook의 결과물은 "발견한 것과 그 근거"이며, 그대로 배포되는 서비스가 아닙니다.',
    state:
      '같은 문서에 입력과 출력이 함께 저장되고 커널의 상태가 유지되므로, 보이는 결과가 어떤 셀을 어떤 순서로 실행해서 나왔는지는 문서만 봐서는 드러나지 않을 수 있습니다. 문서는 커널 상태를 비우려면 Kernel의 Restart를 쓰라고 안내합니다.',
    noteTitle: 'Notebook이 나쁜 코드라는 뜻이 아닙니다',
    note: 'Notebook은 탐색에 쓰는 도구이고 서비스는 다른 요구를 가진 환경입니다. 이 장은 둘의 역할이 다르다는 것과, Notebook에서 서비스로 옮길 때 무엇을 함께 옮겨야 하는지를 다룹니다.',
  },
  en: {
    intro: (
      <>
        In 01-06 we set success criteria and cases. Now you need to test candidates against those
        criteria, and the place for that is a notebook.{' '}
        <ExternalLink href={JUPYTER}>The Jupyter documentation</ExternalLink> describes a notebook
        document as holding &quot;the inputs and outputs of an interactive session&quot;, made of a
        sequence of cells, with an open notebook connected to one kernel.
      </>
    ),
    purpose:
      'This structure suits exploration. You can repeat, in one place, looking at data, changing hypotheses, comparing results, and writing explanations in the same document. Since the purpose is exploration, the output of a notebook is "what was found and its evidence", not a service to ship as is.',
    state:
      'Inputs and outputs are saved in the same document and the kernel keeps its state, so which cells ran in which order to produce the visible results may not be evident from the document alone. The documentation points to Kernel, Restart for clearing the kernel state.',
    noteTitle: 'This does not say notebooks are bad code',
    note: 'A notebook is a tool for exploration, and a service is an environment with different requirements. This chapter covers that their roles differ and what must be carried over together when moving from a notebook to a service.',
  },
};

export const PurposeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.purpose.id}>
      <DocH2 {...toc.purpose} />
      <p>{c.intro}</p>
      <p>{c.purpose}</p>
      <p>{c.state}</p>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
