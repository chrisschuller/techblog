import { useContext, useEffect } from "react";
import ThemeSwitcherContext, { Category } from "../../contexts/ThemeSwitcher";

function CategoryPageClient({
  params,
  children,
}: {
  params: { category: Category };
  children: any;
}) {
  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    console.log(params.category);
    toggleColorScheme(params.category);
  }, []);
  return <>{children}</>;
}

export default CategoryPageClient;
