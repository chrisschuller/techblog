import "server-only";
import Article from "../components/Article";

async function fetchArticlePageData(slug: string) {
  const query = `query($preview: Boolean) {
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
              block{sys{id},url, title}
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
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/aa2x2q37oe7p/environments/master`,
    {
      method: "POST",
      next: { revalidate: 300 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CPA_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { preview: true } }),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  const data = response.data.articleCollection.items[0];

  return data as Article;
}

export default fetchArticlePageData;
