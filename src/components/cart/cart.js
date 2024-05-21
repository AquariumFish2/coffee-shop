import { Button, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { cartContext } from "../../contexts/CartContext";
import { colors } from "../../data/data.js";
import { FaCartShopping } from "react-icons/fa6";

import CartItem from "./components/cartItem.js";
import PlaceHolder from "./components/PlaceHolder.js";
import Layer from "./components/Layer.js";
import Settings from "./components/coffeeSettings.js";
import { notificationContext } from "../../contexts/NotificationContext.js";

function CartPage() {
  const { cart, calculatedTotal } = useContext(cartContext);
  const { show } = useContext(notificationContext);
  const [layer, setLayer] = useState(false);
  const [coffeeSettings, setCoffeeSettings] = useState();

  return cart.length > 0 ? (
    <VStack
      minHeight={"100vh"}
      width={"100vw"}
      maxWidth={"100%"}
      position={"relative"}
    >
      <Grid
        width={"100vw"}
        maxWidth={"100%"}
        padding={"30px"}
        gridTemplateColumns={"repeat(auto-fit,minmax(300px,20vw))"}
        gap={"15px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {cart.map((item) => {
          console.log(item.quantity);
          return (
            <CartItem
              item={item}
              setLayer={setLayer}
              setCoffeeSettings={setCoffeeSettings}
              key={item.name}
            ></CartItem>
          );
        })}
      </Grid>
      <HStack
        width={"50%"}
        backgroundColor={"white"}
        justifyContent={"center"}
        padding={"30px"}
        borderRadius={"15px"}
      >
        <Text
          backgroundColor={"#ffc10747"}
          padding={"9px"}
          borderRadius={"8px"}
        >
          Total: ${Math.round(calculatedTotal())}
        </Text>
        <Button
          backgroundColor={colors.DarkCoffee}
          _hover={{
            backgroundColor: colors.mediumDark,
          }}
          onClick={() => {
            show("still on beta thanks", true);
          }}
        >
          <FaCartShopping color="white"></FaCartShopping>
          <Text fontWeight={"normal"} color={"white"} padding={"6px"}>
            Apply Order
          </Text>
        </Button>
      </HStack>
      {layer ? <Layer setLayer={setLayer}></Layer> : <></>}
      {layer ? (
        <Settings item={coffeeSettings} setLayer={setLayer}></Settings>
      ) : (
        <></>
      )}
    </VStack>
  ) : (
    <PlaceHolder></PlaceHolder>
  );
}

export default CartPage;
