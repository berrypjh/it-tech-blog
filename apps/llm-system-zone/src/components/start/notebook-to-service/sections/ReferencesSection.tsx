import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://jupyter-notebook.readthedocs.io/en/stable/notebook.html',
    source: { ko: 'Jupyter', en: 'Jupyter' },
    title: {
      ko: 'The Notebook (Jupyter Notebook documentation)',
      en: 'The Notebook (Jupyter Notebook documentation)',
    },
    note: {
      ko: '확인함: notebook 문서의 구성(셀), 입력과 출력을 함께 담음, 하나의 커널과 연결, 커널 재시작. 셀 실행 순서는 이 문서가 다루지 않는다',
      en: 'Checked: the structure of a notebook document (cells), holding inputs and outputs, one kernel, restarting the kernel. This document does not cover cell execution order',
    },
  },
  {
    href: 'https://scikit-learn.org/stable/modules/calibration.html',
    source: { ko: 'scikit-learn', en: 'scikit-learn' },
    title: { ko: 'Probability calibration', en: 'Probability calibration' },
    note: {
      ko: '확인함: 보정된 분류기의 정의(0.8 근처의 값을 준 표본의 약 80%가 양성), 모든 분류기의 점수가 보정된 것은 아니다',
      en: 'Checked: the definition of a calibrated classifier (about 80% of samples given a value near 0.8 are positive), and not every classifier’s score is calibrated',
    },
  },
  {
    href: 'https://scikit-learn.org/stable/modules/classification_threshold.html',
    source: { ko: 'scikit-learn', en: 'scikit-learn' },
    title: {
      ko: 'Tuning the decision threshold for class prediction',
      en: 'Tuning the decision threshold for class prediction',
    },
    note: {
      ko: '확인함: 기본 컷오프는 대부분의 용도에 이상적이지 않다, 분류기 학습 데이터와 같은 데이터로 임계값을 조정하지 않는다',
      en: 'Checked: default cut-offs are not ideal for most uses, and do not tune the threshold on the data the classifier was trained on',
    },
  },
  {
    href: 'https://developers.openai.com/cookbook/examples/reproducible_outputs_with_the_seed_parameter',
    source: { ko: 'OpenAI Cookbook', en: 'OpenAI Cookbook' },
    title: {
      ko: 'Reproducible outputs with the seed parameter',
      en: 'Reproducible outputs with the seed parameter',
    },
    note: {
      ko: '확인함: 한 제공자의 seed 재현성은 best effort이며 같은 조건에서도 달라질 수 있다 (해당 API 한정)',
      en: 'Checked: one provider’s seed reproducibility is best effort and can differ under the same conditions (that API only)',
    },
  },
  {
    href: 'https://semver.org/',
    source: { ko: 'semver.org', en: 'semver.org' },
    title: { ko: 'Semantic Versioning 2.0.0', en: 'Semantic Versioning 2.0.0' },
    note: {
      ko: '확인함: 호환되지 않는 변경은 major, 호환되는 기능 추가는 minor, 호환되는 버그 수정은 patch',
      en: 'Checked: incompatible changes raise major, compatible additions minor, and compatible bug fixes patch',
    },
  },
];

export const ReferencesSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.references.id}>
      <DocH2 {...toc.references} />
      <ReferenceList references={references} locale={locale} />
    </section>
  );
};
