interface FetchContentfulDataParams {
  query: string;
  revalidate: number;
}

function fetchContentfulData({ query, revalidate }: FetchContentfulDataParams) {
  // Select between Content Delivery API (cached) and Content Preview API
  const preview = process.env.CONTENTFUL_PREVIEW === "true" ? true : false;

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      next: { revalidate },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CPA_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { preview } }),
    }
  );
}

export default fetchContentfulData;
