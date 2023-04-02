class Page {
  constructor(style, index) {
    this.style = style;
    this.index = index;
  }
}

export const createPages = (currentCount, totalCount, renderCount) => {
  let pages = [];

  if (currentCount < renderCount >> 1) {
    for (let i = 0; i < renderCount; ++i) {
      pages.push(new Page(currentCount === i ? 'pagination-current-page' : 'pagination-page', i))
    }
    return pages;
  }

  if (renderCount & 1) {
    const rc = (renderCount - 1) >> 1;
    for (let i = currentCount - rc; i <= currentCount + rc; ++i) {
      if (i > totalCount) break;
      pages.push(new Page(currentCount === i ? 'pagination-current-page' : 'pagination-page', i))
    }
    return pages;
  }

  const rc = renderCount >> 1;
  for (let i = currentCount - rc; i < currentCount + rc; ++i) {
    if (i > totalCount) break;
    pages.push(new Page(currentCount === i ? 'pagination-current-page' : 'pagination-page', i))
  }
  return pages;
}