import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2, DocTable } from '@it-tech-blog/ui';

import { Check, Lightbulb, Minus } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<p>답변 받을 방법</p>
<label><input type="radio" name="reply" value="email" /> 이메일</label>
<label><input type="radio" name="reply" value="phone" /> 전화</label>`,
    after: `<fieldset>
  <legend>답변 받을 방법</legend>
  <label><input type="radio" name="reply" value="email" /> 이메일</label>
  <label><input type="radio" name="reply" value="phone" /> 전화</label>
</fieldset>`,
  },
  en: {
    before: `<p>How should we reply?</p>
<label><input type="radio" name="reply" value="email" /> Email</label>
<label><input type="radio" name="reply" value="phone" /> Phone</label>`,
    after: `<fieldset>
  <legend>How should we reply?</legend>
  <label><input type="radio" name="reply" value="email" /> Email</label>
  <label><input type="radio" name="reply" value="phone" /> Phone</label>
</fieldset>`,
  },
};

/** 판단마다 쓰는 아이콘과 색. 글자가 뜻을 전달하고 아이콘은 훑어보기를 돕는다. */
const verdicts = {
  use: { icon: Check, tone: 'text-text-success' },
  recommended: { icon: Lightbulb, tone: 'text-text-primary' },
  none: { icon: Minus, tone: 'text-text-light' },
};

/** 표의 행 순서와 같은 순서로 놓인 판단: 라디오 · 체크박스 · 생년월일 · 체크박스 하나 · 폼 전체. */
const verdictOfRow: (keyof typeof verdicts)[] = ['use', 'use', 'recommended', 'none', 'none'];

const content = {
  ko: {
    intro: (
      <>
        라디오 버튼 하나의 라벨은 &quot;이메일&quot;뿐입니다. 무엇을 묻는 질문의 답인지는 그 위의
        글에 있는데, <code>p</code>로 쓰면 보조기술 사용자는 라디오에 도착했을 때 &quot;이메일,
        라디오 버튼&quot;만 듣고 질문을 모를 수 있습니다. <code>fieldset</code>으로 묶고{' '}
        <code>legend</code>에 질문을 쓰면 그룹의 이름이 됩니다.
      </>
    ),
    caption: 'fieldset이 필요한 경우와 아닌 경우',
    head: ['상황', 'fieldset · legend', '이유'],
    rows: [
      ['한 질문에 대한 라디오 버튼들', '사용', '각 선택지 라벨만으로는 질문을 알 수 없습니다'],
      ['한 질문에 대한 체크박스들', '사용', '같은 이유'],
      ['생년월일처럼 여러 칸이 한 값', '권장', '"년 · 월 · 일" 칸이 무엇의 일부인지 알려 줍니다'],
      [
        '혼자서 뜻이 통하는 체크박스 하나',
        '필요 없음',
        '"약관에 동의합니다"는 라벨만으로 충분합니다',
      ],
      ['폼 전체를 감싸기', '필요 없음', '그룹 이름이 모든 칸에 붙어 오히려 길어집니다'],
    ],
    note: (
      <>
        <code>legend</code>는 <code>fieldset</code>의 첫 번째 자식으로 둡니다. 화면 낭독기가 그룹
        이름을 언제 읽는지(그룹에 들어갈 때 한 번인지, 칸마다인지)는 제품마다 다르므로, legend는
        짧은 질문으로 씁니다.
      </>
    ),
    basis: (
      <>
        WCAG 2.2 성공 기준 1.3.1 정보와 관계(A)가 요구하는 것은 <code>fieldset</code> 자체가 아니라,
        화면에서 보이는 묶음과 질문을 기계도 읽을 수 있게 하는 것입니다. <code>fieldset</code> ·{' '}
        <code>legend</code>는 그 요구를 충족하는 대표적인 방법이어서 표에서 &quot;사용&quot;으로
        적었습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A single radio button&apos;s label is just &quot;Email&quot;. The question it answers is in
        the text above it, but if that text is a <code>p</code>, assistive technology users may hear
        only &quot;Email, radio button&quot; on arrival and not know the question. Wrap them in{' '}
        <code>fieldset</code> and write the question in <code>legend</code>, and it becomes the
        group&apos;s name.
      </>
    ),
    caption: 'When you need fieldset and when you do not',
    head: ['Situation', 'fieldset · legend', 'Why'],
    rows: [
      [
        'Radio buttons answering one question',
        'Use',
        'Each option label alone does not say the question',
      ],
      ['Checkboxes answering one question', 'Use', 'Same reason'],
      [
        'Several inputs forming one value, like a date of birth',
        'Recommended',
        'Tells which value the year, month, and day inputs belong to',
      ],
      [
        'A single checkbox that makes sense alone',
        'Not needed',
        '"I agree to the terms" is enough as a label',
      ],
      [
        'Wrapping the whole form',
        'Not needed',
        'The group name gets added to every field and only adds length',
      ],
    ],
    note: (
      <>
        Put <code>legend</code> as the first child of <code>fieldset</code>. When screen readers
        read the group name (once on entering, or for every field) differs by product, so write the
        legend as a short question.
      </>
    ),
    basis: (
      <>
        What WCAG requires is not <code>fieldset</code> itself, but that the grouping and question
        visible on screen are also machine-readable (1.3.1, A). <code>fieldset</code> and{' '}
        <code>legend</code> are the typical way to meet that, which is why the table says
        &quot;Use&quot;.
      </>
    ),
  },
};

export const GroupsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.groups.id}>
      <DocH2 {...toc.groups} />
      <p>{c.intro}</p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map(([situation, verdict, reason], i) => {
          const { icon, tone } = verdicts[verdictOfRow[i]];
          return [
            situation,
            <IconLabel key="verdict" icon={icon} tone={tone}>
              {verdict}
            </IconLabel>,
            reason,
          ];
        })}
      />
      <p>{c.note}</p>
      <p>{c.basis}</p>
    </section>
  );
};
