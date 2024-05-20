import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { colors } from "../../../data/data";
import { useContext } from "react";
import { categoryContext } from "../../../contexts/CategoriesContext";
import { FaCheck } from "react-icons/fa";
import { productsContext } from "../../../contexts/ProcutsContext";

function Categories() {
  const { categories } = useContext(categoryContext);
  return (
    <VStack margin={"30px"} width={"95vw"} minHeight={"50vh"}>
      <Text
        alignSelf={"flex-start"}
        margin={"1.5em 3em"}
        fontSize={"1.5em"}
        fontWeight={"bold"}
      >
        Categories:
      </Text>
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
        gap={"10px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {categories.map((category) => {
          return <Category category={category} key={category.value}></Category>;
        })}
      </Grid>
    </VStack>
  );
}

function Category(props) {
  const { updateCategories } = useContext(categoryContext);
  const { updateProductsOnCatChange } = useContext(productsContext);

  return (
    <GridItem
      opacity={props.category.selected ? 1 : 0.4}
      padding={{ base: "45px", md: "50px" }}
      borderRadius={"10px"}
      backgroundColor={"white"}
      boxShadow={"2px 2px 5px 1px black"}
      onClick={() => {
        updateCategories(props.category);
        updateProductsOnCatChange();
        // setChecked(!checked);
      }}
      position={"relative"}
    >
      <VStack>
        <Box
          width={"18px"}
          height={"18px"}
          backgroundColor={
            props.category.selected ? `${colors.mediumDark}` : "transparent"
          }
          borderRadius={"3px"}
          border={`2px solid ${colors.DarkCoffee}`}
          position={"absolute"}
          top={3}
          right={3}
        >
          <FaCheck
            color="white"
            style={{ width: "12px", height: "12px", margin: "2px" }}
          />
        </Box>
        {props.category.icon}
        <Text>{props.category.value}</Text>
      </VStack>
    </GridItem>
  );
}

export default Categories;
