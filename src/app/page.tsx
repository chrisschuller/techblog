import HomePageClient from "./page.client";
import HomePageServer from "./page.server";

function HomePage() {
  return (
    <>
      <HomePageClient>
        <HomePageServer />
      </HomePageClient>
    </>
  );
}

export default HomePage;
