import styled from "@emotion/styled";
import CategoryLink from "./CategoryLink";
import Stack from "./Stack";
import { Text } from "./Text";

const CategorySelectionContainer = styled(Stack)`
  width: 100%;
  margin-bottom: 20px;
`;

function CategorySelection() {
  return (
    <CategorySelectionContainer
      direction="column"
      gap={"20px"}
      justify="flex-start"
      align="start"
    >
      <Text size="lg" bold>
        Browse Categories
      </Text>
      <Stack direction="row" justify="flex-start" align="center" gap="10px">
        <CategoryLink category="technology" href={"/articles/technology"}>
          Technology
        </CategoryLink>
        <CategoryLink category="food" href={"/articles/food"}>
          Food
        </CategoryLink>
      </Stack>
    </CategorySelectionContainer>
  );
}

export default CategorySelection;
