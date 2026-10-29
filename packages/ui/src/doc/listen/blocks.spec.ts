import { describe, expect, it } from 'vitest';

import { blockText, collectBlocks, splitSentences } from './blocks';

const render = (html: string) => {
  const root = document.createElement('article');
  root.innerHTML = html;
  return root;
};

describe('collectBlocks', () => {
  it('reads headings, paragraphs and leaf list items in order', () => {
    const root = render('<h2>Title</h2><p>Body</p><ul><li><p>Inner</p></li><li>Leaf</li></ul>');
    expect(collectBlocks(root).map((el) => el.textContent)).toEqual([
      'Title',
      'Body',
      'Inner',
      'Leaf',
    ]);
  });

  it('skips code, hidden decoration and marked exercises', () => {
    const root = render(
      '<pre><p>code</p></pre><p aria-hidden="true">deco</p>' +
        '<div data-narration="skip"><p>demo</p></div><p>kept</p>',
    );
    expect(collectBlocks(root).map((el) => el.textContent)).toEqual(['kept']);
  });
});

describe('blockText', () => {
  it('drops screen-reader-only helper text such as anchor names and new-tab notes', () => {
    const root = render(
      '<h2>Who is it for?<a href="#x"><svg aria-hidden="true"></svg>' +
        '<span class="ui-visually-hidden">Who is it for? section link</span></a></h2>' +
        '<p>See <a href="#y">needs<span class="ui-visually-hidden">(opens in a new tab)</span></a>.</p>',
    );
    expect(collectBlocks(root).map(blockText)).toEqual(['Who is it for?', 'See needs.']);
  });
});

describe('splitSentences', () => {
  it('splits on sentence ends but keeps version numbers', () => {
    expect(splitSentences('WCAG 2.2 is here. It has 86 criteria! Done?')).toEqual([
      'WCAG 2.2 is here.',
      'It has 86 criteria!',
      'Done?',
    ]);
  });
});
