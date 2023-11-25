const query = `
query($preview: Boolean) {
  articleCollection(limit: 10, preview: $preview){
    items{
      sys{
        firstPublishedAt
      }
      slug,
      title,
      description,
      articleImage{url},
      author,
      authorImage{
        url
      },
      content{json},
      recommendedArticlesCollection{
        items{
          title
        }
      }
    }
  }
}
`;

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/aa2x2q37oe7p/environments/master`,
    {
      method: "POST",
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
  const data = response.data.articleCollection.items;
  console.log(data);

  return Response.json(data);
}
