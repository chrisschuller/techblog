function articlePageQuery(slug: string) {
  return `query($preview: Boolean) {
        articleCollection(where: { slug: "${slug}" }, preview: $preview, limit: 1) {
          items {
            sys {
              publishedAt
            }
            title
            description
            articleImage {
              url
            }
            author
            authorImage {
              url
            }
            content {
              json
              links {
                assets {
                  block{sys{id}, url, title, width, height}
                }
              }
            },
            estimatedReadTimeMinutes,
            recommendedArticlesCollection {
              items {
                sys {
                  publishedAt
                }
                category
                slug
                title
                description
                articleImage {
                  url
                }
                author
                authorImage {
                  url
                }
                estimatedReadTimeMinutes
              }
            }
          }
        }
      }
        `;
}

export default articlePageQuery;
