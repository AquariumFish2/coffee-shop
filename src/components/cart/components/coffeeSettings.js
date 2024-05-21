import {
  Button,
  Checkbox,
  Circle,
  HStack,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors } from "../../../data/data";
import { FaX } from "react-icons/fa6";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useContext, useState } from "react";
import { cartContext } from "../../../contexts/CartContext";

function Settings(props) {
  const item = props.item;
  const { updateItem } = useContext(cartContext);
  const [darkness, setDarkness] = useState(item.darkness);
  const [sugarSpoons, setSugarSpoons] = useState(item.sugar);
  const [milk, setMilk] = useState(item.milk);
  const dark = {
    0: "Light Coffee",
    20: "Medium Light",
    40: "Medium",
    60: "Medium Dark",
    80: "Dark Coffee",
    100: "Batman Special",
  };

  console.log(
    "darkness:",
    item.darkness,
    "  sugarSpoons:",
    item.sugar,
    "milk",
    item.milk
  );
  return (
    <VStack
      position={"fixed"}
      margin={"0 auto"}
      top={"15vh"}
      borderRadius={"15px"}
      zIndex={101}
      background={colors.lightCoffee}
      gap={"20px"}
      padding={"50px"}
    >
      <Image src={item.image} height={"100px"}></Image>
      <HStack>
        <Text width={"120px"}>Sugar Spoons:</Text>
        <IconButton
          icon={<BiMinus></BiMinus>}
          onClick={() => {
            if (sugarSpoons - 1 > 0) setSugarSpoons(sugarSpoons - 1);
          }}
        ></IconButton>
        <Text>{sugarSpoons}</Text>
        <IconButton
          icon={<BiPlus></BiPlus>}
          onClick={() => {
            setSugarSpoons(sugarSpoons + 1);
          }}
        ></IconButton>
      </HStack>
      <HStack>
        <Text width={"120px"}>Milk:</Text>
        <Checkbox
          colorScheme={"yellow"}
          borderColor={`${colors.medium}`}
          isChecked={milk}
          onChange={() => setMilk(!milk)}
        ></Checkbox>
      </HStack>
      <HStack gap={"20px"}>
        <Circle
          width={"30px"}
          height={"30px"}
          backgroundColor={`${colors.DarkCoffee}${darkness - 1}`}
          position={"relative"}
          _before={{
            content: `""`,
            height: "100%",
            width: "100%",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: colors.medium,
            zIndex: -1,
          }}
          border={"4px solid white"}
          boxShadow={"0px 0px 4px 1px black"}
        ></Circle>
        <Slider
          aria-label="slider-ex-2"
          defaultValue={darkness}
          width={"100px"}
          onChange={(e) => {
            setDarkness(e);
          }}
          step={20}
        >
          <SliderTrack backgroundColor={colors.mediumDark + "50"}>
            <SliderFilledTrack
              backgroundColor={`${colors.DarkCoffee}${darkness - 1}`}
            />
          </SliderTrack>
          <SliderThumb background={colors.DarkCoffee} />
        </Slider>
      </HStack>
      <Text>{dark[darkness]}</Text>
      <HStack>
        <Button
          onClick={() => {
            updateItem(item, darkness, sugarSpoons, milk);
            console.log(darkness, sugarSpoons, milk);
            props.setLayer(false);
          }}
        >
          Submit
        </Button>
        <Button
          color={"red"}
          onClick={() => {
            props.setLayer(false);
          }}
        >
          Cancel
        </Button>
      </HStack>
      <IconButton
        icon={<FaX></FaX>}
        position={"absolute"}
        right={"10px"}
        top={"10px"}
        onClick={() => {
          props.setLayer(false);
        }}
      ></IconButton>
    </VStack>
  );
}

export default Settings;
