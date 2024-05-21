import { HStack, VStack, Image, Grid, GridItem, Text } from "@chakra-ui/react";
import x from "../../../assets/why-us.jpg";
import { colors } from "../../../data/data";
import {
  TbBrandSpeedtest,
  TbBread,
  TbCactus,
  TbCoffee,
} from "react-icons/tb";

function WhyUsSection() {
  return (
    <HStack
      minHeight={"100vh"}
      width={"100vw"}
      maxWidth={"100%"}
      padding={"10em 20px"}
      backgroundColor={"#ffffff90"}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={"center"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Grid
      
        templateColumns={"1fr 1fr"}
        templateAreas={"auto auto"}
        overflowWrap={"normal"}
        overflow={"hidden"}
        width={{ base: "100vw", md: "50vw" }}
        gap={{base:"30px",md:"60px"}}
        maxWidth={"100%"}
        height={"80vh"}
      >
        <Item
          title={"Fast Service"}
          icon={TbBrandSpeedtest}
          content={`we are known for our fast and comfortable service which doesn't affect
          the tasteness of the coffee ofcourse!`}
        ></Item>
        <Item
          title={"Cozy Environment"}
          icon={TbCactus}
          content={`come and do your work, study, or any of your duties and enjoy doing it in a relaxing cozy environment.`}
        ></Item>
        <Item
          title={"Best Tastes"}
          icon={TbCoffee}
          content={`we use the best coffee products and they are being used by the best to create the best coffee for your enjoyment!`}
        ></Item>
        <Item
          title={"Bakery"}
          icon={TbBread}
          content={`enjoy the best fresh bakery with your coffee all in one place with great discounts`}
        ></Item>
      </Grid>
      <Image
        src={x}
        maxHeight={"80vh"}
        // width={"40vw"}
        objectFit={"cover"}
        borderRadius={"15px"}
        border={`2px solid ${colors.mediumLight}`}
        boxShadow={`1px 1px 5px 1px ${colors.DarkCoffee}`}
      ></Image>
    </HStack>
  );
}

function Item(props) {
  return (
    <GridItem padding={"15px"}>
      <VStack alignItems={"flex-start"}>
        <HStack>
          <props.icon style={{ width: "20px", height: "20px" }} />
          <Text fontSize={{ base: "1em", md: "0.9em", lg: "1em" }}>
            {props.title}
          </Text>
        </HStack>
        <Text fontSize={"0.9em"} fontWeight={"500"} opacity={"0.5"}>
          {props.content}
        </Text>
      </VStack>
    </GridItem>
  );
}

export default WhyUsSection;
