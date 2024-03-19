import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function readingTimeRemarkPlugin() {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    file.data.astro.frontmatter.readingTime = readingTime;
  };
}

export function seoMetaRemarkPlugin() {
  return function (tree, file) {
    const frontmatter = file.data.astro.frontmatter;
    frontmatter.metaRobots = frontmatter.metaRobots || "index, follow";
  };
}

export function responsiveTablesRehypePlugin() {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        tree.children[i] = wrapper;

        i++;
      }
    }
  };
}
