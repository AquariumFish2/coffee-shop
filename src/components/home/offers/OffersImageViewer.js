import {
  Box,
  Button,
  Center,
  Circle,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors, offerImages } from "../../../data/data";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

function OffersImageViewer() {
  const [currentOffer, setCurrentOffer] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(1);

  const nextHandler = () => {
    setImageOpacity(0);
    setTimeout(() => {
      if (!currentOffer + 1 >= offerImages.length) {
        setCurrentOffer(currentOffer + 1);
      } else {
        setCurrentOffer(0);
      }
      setImageOpacity(1);
    }, 450);
  };

  const prevHandler = () => {
    setImageOpacity(0);
    setTimeout(() => {
      if (!currentOffer - 1 < 0) {
        setCurrentOffer(currentOffer - 1);
      } else {
        setCurrentOffer(offerImages.length - 1);
      }
      setImageOpacity(1);
    }, 450);
  };

  const selectImage = (index) => {
    if (index !== currentOffer) {
      setImageOpacity(0);
      setTimeout(() => {
        setCurrentOffer(index);
        setImageOpacity(1);
      }, 300);
    }
  };

  return (
    <VStack
      boxSizing="border-box"
      gap={0}
      backgroundColor={`${colors.medium}90`}
      margin={"0"}
      width={"100vw"}
      maxWidth={"100%"}
    >
      <Text
        alignSelf={"flex-start"}
        padding={"20px 3em 0 "}
        fontSize={"1.5em"}
        fontWeight={"bold"}
        color={"white"}
      >
        Running Offers:
      </Text>
      <HStack
        width={"90vw"}
        height={{ base: "70vw", md: "75vh" }}
        margin={"2em 3em 3em "}
        // padding={"2em"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={0}
      >
        <Button
          margin={0}
          maxWidth={"10vw"}
          height={"inherit"}
          borderRadius={"5px 0 0 5px"}
          backgroundColor={"#000000"}
          color={"white"}
          _hover={{ backgroundColor: "white", color: "black" }}
          onClick={prevHandler}
        >
          <GrPrevious />
        </Button>
        {
          <Box
            width={"75vw"}
            height={"inherit"}
            position={"relative"}
            bgColor={"#e9e9e950"}
            _before={{
              content: `"${offerImages[currentOffer].sale}%"`,
              position: "absolute",
              zIndex: 2,
              top: "10px",
              left: "10px",
              transform: "rotate(315deg)",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <Image
              src={offerImages[currentOffer].img}
              opacity={imageOpacity}
              transition={"opacity 0.4s"}
              height={"inherit"}
              width={"inherit"}
              objectFit={"cover"}
            ></Image>
            <Center
              position={"absolute"}
              bottom={"23px"}
              right={"20px"}
              fontSize={{ base: "0.6em", md: "1em" }}
            >
              <Text
                textAlign={"center"}
                backgroundColor={"white"}
                width={"fit-content"}
                padding={"5px 15px"}
                borderRadius={"30px"}
                marginTop={"10px"}
              >
                {offerImages[currentOffer].description}
              </Text>
            </Center>
          </Box>
        }
        <Button
          maxWidth={"10vw"}
          height={"inherit"}
          borderRadius={"0 5px 5px 0"}
          backgroundColor={"#000000"}
          color={"white"}
          _hover={{ backgroundColor: "white", color: "black" }}
          onClick={nextHandler}
        >
          <GrNext />
        </Button>
        <HStack position={"absolute"} bottom={-7}>
          {offerImages.map((offer, index) => {
            return (
              <Circle
                minWidth={1}
                minHeight={1}
                backgroundColor={
                  currentOffer === index
                    ? colors.DarkCoffee
                    : colors.lightCoffee
                }
                border={`1px solid ${colors.mediumDark}`}
                key={index}
                cursor={"pointer"}
                onClick={() => {
                  selectImage(index);
                }}
              ></Circle>
            );
          })}
        </HStack>
      </HStack>
    </VStack>
  );
}

export default OffersImageViewer;
