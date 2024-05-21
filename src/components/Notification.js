import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { notificationContext } from "../contexts/NotificationContext";

function Notification(props) {
  const { close, content, alert } = useContext(notificationContext);
  console.log(content);
  return (
    <Box
      position={"fixed"}
      bottom={10}
      right={10}
      width={"200px"}
      padding={"10px"}
      maxHeight={"80px"}
      fontSize={"0.9em"}
      fontWeight={"bold"}
      //   height={"80px"}
      backgroundColor={"white"}
      borderBottom={`3px solid ${alert ? "red" : "blue"}`}
      boxShadow={"0px 0px 5px 1px black"}
      opacity={0.7}
      _hover={{
        opacity: 1,
        _before: {
          visibility: "visible",
        },
        cursor: "pointer",
      }}
      onClick={close}
      _before={{
        content: `"x"`,
        fontSize: "0.8em",
        padding: "1px 2px",
        color: "white",
        position: "absolute",
        top: "3px",
        right: "5px",
        borderRadius: "1px",
        backgroundColor: "red",
        visibility: "hidden",
      }}
    >
      {content}
    </Box>
  );
}

export default Notification;
