import { describe, expect, it } from 'vitest';

import { fullSegments, lectureSegments } from './segments';

const page = () => {
  const root = document.createElement('article');
  root.innerHTML = `
    <header>
      <p>Chapter 01</p><h1>Title</h1><p>Lead.</p>
      <section aria-labelledby="learn-heading"><h2 id="learn-heading">Learn</h2>
        <ul><li>Goal one</li></ul></section>
    </header>
    <section aria-labelledby="a"><h2 id="a">Alpha</h2>
      <p>Alpha first.</p><p>Alpha second.</p>
      <h3>Sub</h3><p>Sub first.</p><p>Sub second.</p>
      <div><table><caption>What each stage needs</caption><tr><td>cell</td></tr></table></div>
      <aside data-variant="note"><p>Key</p><div><p>Remember this.</p><p>Extra.</p></div></aside>
      <aside data-variant="practice"><p>Try</p><div><p>Do it.</p></div></aside>
      <div data-narration="skip"><p>Demo text.</p></div>
    </section>
    <section aria-labelledby="b"><h2 id="b">Beta</h2><ul><li data-narration="key">Must read.</li></ul></section>
    <section aria-labelledby="summary"><h2 id="summary">Summary</h2><ol><li>Point.</li></ol></section>
    <section aria-labelledby="references"><h2 id="references">References</h2><p>Link.</p></section>`;
  return root;
};

describe('lectureSegments', () => {
  it('picks the instructor path through the page', () => {
    expect(lectureSegments(page(), 'en').map((seg) => seg.text)).toEqual([
      'Title',
      'Lead.',
      'Here is what this page covers.',
      'Goal one',
      "Let's start with “Alpha”.",
      'Alpha first.',
      'Sub',
      'Sub first.',
      'The table on screen lays out what each stage needs.',
      'Key. Remember this.',
      'Next up: “Beta”.',
      'Must read.',
      'To wrap up, here are the key points.',
      'Point.',
    ]);
  });
});

describe('fullSegments', () => {
  it('reads every block but still skips marked exercises', () => {
    const texts = fullSegments(page()).map((seg) => seg.text);
    expect(texts).toContain('Alpha second.');
    expect(texts).not.toContain('Demo text.');
  });
});

describe('lectureSegments with a script', () => {
  it('reads scripted sections and keeps the automatic path elsewhere', () => {
    const texts = lectureSegments(page(), 'en', {
      en: {
        header: [{ target: 'h1', text: 'Today we ask one question.', pause: 'think' }],
        a: [
          { target: ':scope > h2', text: 'First, alpha.' },
          { target: 'aside', text: 'Remember this one.', say: 'Remember this one, please.' },
          { target: '.missing', text: 'Falls back to the aside.' },
        ],
      },
    }).map((seg) => [seg.text, seg.el.tagName, seg.speech ?? '']);

    expect(texts).toEqual([
      ['Today we ask one question.', 'H1', ''],
      ['First, alpha.', 'H2', ''],
      ['Remember this one.', 'ASIDE', 'Remember this one, please.'],
      ['Falls back to the aside.', 'ASIDE', ''],
      ['Next up: “Beta”.', 'H2', ''],
      ['Must read.', 'LI', ''],
      ['To wrap up, here are the key points.', 'H2', ''],
      ['Point.', 'LI', ''],
    ]);
  });
});
