import { Circle, HStack, Heading, VStack, Image, Text } from "@chakra-ui/react";
import heroImg from "../../../assets/hero.png";
import { colors, fonts } from "../../../data/data";

function HeroSection() {
  return (
    <HStack
      minHeight={"calc(100vh - 80px)"}
      justifyContent={"space-around"}
      width={"100vw"}
      maxWidth={"100%"}
    >
      <VStack
        maxWidth={{ base: "90vw", md: "60vw", lg: "50vw" }}
        alignItems={"flex-start"}
        gap={"1em"}
        color={colors.DarkCoffee}
        zIndex={2}
      >
        <Heading fontFamily={fonts.decoratedFont}>Welcome to Our Café</Heading>
        <Text fontFamily={fonts.bodyFont} color={colors.mediumDark}>
          where you can enjoy cozy relaxing and warm environment with the best
          coffee in the whole country we get our products from the finest
          sources and hire the best baristas to make the best out of them you
          can try that yourself, enjoy!
        </Text>
      </VStack>
      <Circle
        position={{ base: "absolute", md: "relative" }}
        maxHeight={{ base: "350px", md: "250px" }}
        maxWidth={{ base: "350px", md: "250px" }}
        backgroundColor={`${colors.mediumLight}50`}
        boxShadow={`0px 0px 5px 1px ${colors.DarkCoffee}`}
        padding={{ base: "50px", md: "40px" }}
        opacity={{ base: "0.4", md: "1" }}
      >
        <Image src={heroImg}></Image>
      </Circle>
    </HStack>
  );
}

export default HeroSection;
