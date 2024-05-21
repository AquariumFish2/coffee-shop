import {
  Button,
  GridItem,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors } from "../../../data/data";
import { ImBin } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { useContext } from "react";
import { cartContext } from "../../../contexts/CartContext";

function CartItem(props) {
  const { quantityIncDec, deleteItem, checkCoffee } = useContext(cartContext);
  const item = props.item;
  return (
    <GridItem
      backgroundColor={"#ffffff"}
      // height={"350px"}
      padding={"50px"}
      key={item.name}
      borderRadius={"15px"}
      position={"relative"}
    >
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        height={"inherit"}
        gap={"1.5em"}
      >
        <Image
          src={item.image}
          height={"100px"}
          width={"100px"}
          borderRadius={"50%"}
          backgroundColor={colors.mediumLight}
        ></Image>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>

        <HStack>
          <Button
            onClick={() => {
              quantityIncDec(item, false);
            }}
          >
            -
          </Button>
          <Text>{item.quantity}</Text>
          <Button
            onClick={() => {
              quantityIncDec(item, true);
            }}
          >
            +
          </Button>
        </HStack>
        <Text
          fontWeight={"bold"}
          color={"white"}
          backgroundColor={colors.mediumDark}
          padding={"5px"}
          borderRadius={"8px"}
        >
          ${Math.ceil(item.quantity * item.price)}
        </Text>
        <IconButton
          position={"absolute"}
          top={"10px"}
          right={"10px"}
          icon={<ImBin color="red"></ImBin>}
          onClick={() => deleteItem(item)}
        ></IconButton>
        {checkCoffee(item) ? (
          <IconButton
            position={"absolute"}
            icon={<FiSettings></FiSettings>}
            top={"10px"}
            left={"10px"}
            onClick={() => {
              props.setLayer(true);
              props.setCoffeeSettings(item);
            }}
          ></IconButton>
        ) : (
          <></>
        )}
      </VStack>
    </GridItem>
  );
}

export default CartItem;
