import Category from "../Category/Category";
import Littlecate from "../Category/CategoryFilteredBySmall";
import MetPetHeroes from "../MeaningfulSection/MetPetHeroes";
import WhyAdopt from "../MeaningfulSection/WhyAdopt";
import RecentListing from "../RecentListing/RecentListing";

import Banner from "./Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Category></Category>
      <RecentListing></RecentListing>
      <WhyAdopt></WhyAdopt>
      <MetPetHeroes></MetPetHeroes>
    </div>
  );
};

export default Home;
