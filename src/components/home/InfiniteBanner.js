import Marquee from "react-fast-marquee";
import { HStack, Text } from "@chakra-ui/react";

function InfiniteBanner() {
  const offers = [
    "50% off on all lattes!",
    "Buy two get one free!",
    "Free shipping on orders over $50!",
    "20% off for new customers!",
    "10% off for indoor ordering",
  ];
  return (
    <Marquee pauseOnHover={true} speed={150} style={{backgroundColor:"#ffffff95"}}>
      {offers.map((offer, index) => (
        <HStack key={index} justifyContent={"space-between"} marginRight={50}>
          <Text color="coffee" fontSize="lg" fontWeight="bold" marginRight={50}>
            {offer}
          </Text>
          <Text>*</Text>
        </HStack>
      ))}
    </Marquee>
  );
}
export default InfiniteBanner;
