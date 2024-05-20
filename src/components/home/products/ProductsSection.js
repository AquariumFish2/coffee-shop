import { Button, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { cartContext } from "../../../contexts/CartContext";
import { productsContext } from "../../../contexts/ProcutsContext";

function ProductsSection() {
  const { prods } = useContext(productsContext);
  return (
    <Grid
      gap={"10px"}
      width={{ base: "85vw", md: "65vw", lg: "55vw" }}
      gridTemplateColumns={{
        base: "repeat(auto-fit,minmax(200px,1fr))",
        md: "repeat(auto-fit,minmax(220px,1fr))",
      }}
      paddingBottom={"50px"}
    >
      {prods.map((product) => (
        <Product key={product.name} product={product}></Product>
      ))}
    </Grid>
  );
}

function Product(props) {
  const product = props.product;
  const { addToCart } = useContext(cartContext);
  return (
    <GridItem borderRadius={"15px"} backgroundColor={"white"} padding={"20px"}>
      <VStack>
        <Text>{product.name}</Text>
        <Image src={product.image} height={"80px"}></Image>
        <Text>${product.price}</Text>
        <Button
          onClick={() => {
            addToCart(product);
            console.log("added?");
          }}
        >
          Add To Cart
        </Button>
      </VStack>
    </GridItem>
  );
}

export default ProductsSection;
