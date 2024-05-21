import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/home/home";
import CartPage from "./components/cart/cart";
import { Box } from "@chakra-ui/react";
import Notification from "./components/Notification";
import { useContext, useLayoutEffect } from "react";
import { notificationContext } from "./contexts/NotificationContext";
import bgimg from "./assets/background.png";
import Footer from "./components/Footer";

function App() {
  const { visibility } = useContext(notificationContext);

  return (
    <ChakraProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
        rel="stylesheet"
      />
      <Wrapper>
        <Box>
          <Header></Header>
          <Box
            backgroundImage={bgimg}
            backgroundPosition={"center"}
            maxWidth={"100vw"}
            fontFamily={"cursive"}
          >
            <Box backgroundColor={"#00000020"}>
              <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
              </Routes>
            </Box>
          </Box>
          <Footer></Footer>
          {visibility ? <Notification /> : <></>}
        </Box>
      </Wrapper>
    </ChakraProvider>
  );
}

export default App;

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
