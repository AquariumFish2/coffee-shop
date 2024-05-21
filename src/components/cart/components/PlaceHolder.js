import { Circle, Image, Text, VStack } from "@chakra-ui/react";
import { colors } from "../../../data/data";
import placeHolder from "../../../assets/coffee-mug.png";
import AnimatedBox from "../../AnimatedBox";

function PlaceHolder() {
  return (
    <AnimatedBox>
      <VStack
        minHeight={"100vh"}
        width={"100vw"}
        maxWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Circle
          padding={"20px"}
          backgroundColor={`${colors.mediumLight}90`}
          boxShadow={`0px 0px 4px 1px ${colors.DarkCoffee}`}
        >
          <Image src={placeHolder} maxHeight={"50vh"}></Image>
        </Circle>
        <Text
          padding={"10px"}
          backgroundColor={"#ffffff86"}
          borderRadius={"15px"}
          textAlign={"center"}
        >
          Please Add items to the cart to start ordering!
        </Text>
      </VStack>
    </AnimatedBox>
  );
}

export default PlaceHolder;
