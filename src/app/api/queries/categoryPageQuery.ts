import Category from "@/app/types/Category";

function categoryPageQuery(category: Category) {
  return `query($preview: Boolean) {
    articleCollection(where: {category: "${category}"}, limit: 10, preview: $preview) {
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
  `;
}

export default categoryPageQuery;
