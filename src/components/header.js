import { Box, Center, Circle, HStack, Image, Text } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { colors } from "../data/data";
import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";

function Header() {
  const { cart } = useContext(cartContext);
  return (
    <Box
      position={"sticky"}
      top={0}
      left={0}
      width={"100%"}
      backgroundColor={colors.DarkCoffee}
      boxShadow={`0px 0px 5px 1px ${colors.DarkCoffee}`}
      padding={"2px 20px"}
      color={"white"}
      zIndex={1000}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <NavLink to={"/"}>
          <Circle
            transition={"0.3s"}
            _hover={{ backgroundColor: `${colors.mediumLight}` }}
          >
            <Center padding={"2px 5px"}>
              <Image
                src={require("../assets/logo.png")}
                maxHeight={"50px"}
              ></Image>
              <Text fontFamily={'"Dancing Script", cursive'}>coffee house</Text>
            </Center>
          </Circle>
        </NavLink>
        <HStack fontWeight={"bold"} gap={"20px"}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink
            to={"/cart"}
            style={{
              backgroundColor: "white",
              color: colors.DarkCoffee,
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Cart
            <Text
              display={"inline-block"}
              padding={"2px"}
              backgroundColor={colors.DarkCoffee}
              color={"white"}
              marginLeft={"3px"}
              borderRadius={"5px"}
            >
              {cart.length}
            </Text>
          </NavLink>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;
