"use client";

import HomePageClient from "./clientPage";
import HomePageServer from "./serverPage";

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
