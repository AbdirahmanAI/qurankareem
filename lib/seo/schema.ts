export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quran Kareem',
    description: 'Experience the Divine Words through modern technology',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateQuranChapterSchema(chapter: {
  number: number;
  name: string;
  englishName: string;
  versesCount: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Chapter',
    name: chapter.englishName,
    alternativeHeadline: chapter.name,
    position: chapter.number,
    numberOfPages: chapter.versesCount,
    isPartOf: {
      '@type': 'Book',
      name: 'The Holy Quran',
      author: {
        '@type': 'Organization',
        name: 'Quran Kareem'
      }
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'Quran Kareem',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/icons/icon-512x512.png`
      }
    }
  };
}