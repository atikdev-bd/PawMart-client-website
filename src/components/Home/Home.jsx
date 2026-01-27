import Category from "../Category/Category";
import RecentListing from "../RecentListing/RecentListing";

import Banner from "./Banner";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Category></Category>
      <RecentListing></RecentListing>
    </div>
  );
};

export default Home;
