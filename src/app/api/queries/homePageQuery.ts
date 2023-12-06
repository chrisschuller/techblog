function homePageQuery() {
  return `
  query($preview: Boolean) {
    articleCollection(limit: 10, preview: $preview){
      items{
        sys{
          publishedAt
        }
        category,
        slug,
        title,
        description,
        articleImage{url},
        author,
        authorImage{
          url
        },
        estimatedReadTimeMinutes
      }
    }
  }
  `;
}

export default homePageQuery;
