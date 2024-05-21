import {
  Center,
  Circle,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors, fonts } from "../data/data";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <VStack backgroundColor={colors.DarkCoffee} justifyContent={"center"}>
      <HStack
        padding={"10px"}
        width={"100vw"}
        maxWidth={"100%"}
        height={"150px"}
        justifyContent={"space-between"}
      >
        <NavLink to={"/"}>
          <Circle
            transition={"0.3s"}
            _hover={{ backgroundColor: `${colors.mediumLight}` }}
          >
            <Center padding={"2px 5px"}>
              <Image src={logo} maxHeight={"50px"}></Image>
              <Text fontFamily={fonts.decoratedFont} color={"white"}>
                coffee house
              </Text>
            </Center>
          </Circle>
        </NavLink>
        <VStack height={"inherit"} justifyContent={"center"} gap={"16px"}>
          <HStack>
            <IconButton
              icon={<FaFacebook></FaFacebook>}
              _hover={{ color: "blue" }}
            ></IconButton>
            <IconButton icon={<FaXTwitter></FaXTwitter>}></IconButton>
            <IconButton icon={<FaInstagram></FaInstagram>}></IconButton>
            <IconButton
              icon={<FaLinkedinIn></FaLinkedinIn>}
              _hover={{ color: "blue" }}
            ></IconButton>
          </HStack>
          <Text color={"white"}>phone: +123 456 789</Text>
        </VStack>
      </HStack>
      <Text color={"gray"}>Copyright Mohamed Mabrouk</Text>
    </VStack>
  );
}

export default Footer;
