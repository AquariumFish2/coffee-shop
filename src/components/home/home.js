import { VStack } from "@chakra-ui/react";
import OffersImageViewer from "./offers/OffersImageViewer";
import Categories from "./categories/Categories";
import InfiniteBanner from "./InfiniteBanner";
import HeroSection from "./hero/HeroSection";
import WhyUsSection from "./why-us/WhyUsSection";
import ProductsSection from "./products/ProductsSection";

function HomePage() {
  return (
    <VStack gap={0}>
      <InfiniteBanner></InfiniteBanner>
      <HeroSection></HeroSection>
      <WhyUsSection></WhyUsSection>
      <OffersImageViewer></OffersImageViewer>
      <Categories></Categories>
      <ProductsSection> </ProductsSection>
    </VStack>
  );
}

export default HomePage;
