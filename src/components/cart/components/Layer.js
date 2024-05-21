import { Box } from "@chakra-ui/react";

function Layer(props) {
  return (
    <Box
      position={"fixed"}
      zIndex={100}
      minHeight={"100vh"}
      width={"100vw"}
      maxWidth={"100%"}
      backgroundColor={"#00000080"}
      top={0}
      left={0}
      justifyContent={"center"}
      onClick={() => {
        props.setLayer(false);
      }}
    ></Box>
  );
}

export default Layer;
