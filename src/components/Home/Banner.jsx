import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dogAndCats from "../../assets/bannerImg/dogAndCats-removebg-preview.png";
import adoptImg from "../../assets/bannerImg/Adopt-removebg-preview.png";
import dogHomeImg from "../../assets/bannerImg/dogHome-removebg-preview.png";
import dogImg from "../../assets/bannerImg/dogs-removebg-preview.png";
import animalsCareImg from "../../assets/bannerImg/animalsCare-removebg-preview.png";
import chairWithPet from "../../assets/bannerImg/chair-removebg-preview.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="min-h-screen">
      <section className="mb-14">
        <Slider {...settings}>
          <div className="relative h-screen w-full max-h-80 lg:max-h-140 xl:max-h-165">
            <img
              src="https://i.ibb.co.com/4nn93rZk/blue-Background.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="flex justify-between">
              <img
                src={dogAndCats}
                alt="Logo"
                className="absolute w-[250px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-10 -left-6   lg:top-40 lg:left-5 xl:top-40 xl:left-2"
              />
              <h1 className="absolute whitespace-nowrap  top-10 left-30 text-2xl lg:top-60 lg:left-75 xl:top-71 xl:left-85  text-gray-900  lg:text-4xl xl:text-5xl font-bold">
                “Find Your Furry
              </h1>
              <h1 className="absolute whitespace-nowrap  top-20 left-60 lg:top-72 lg:left-110 xl:top-87 xl:left-140  text-gray-900 text-[16px] lg:text-2xl xl:text-3xl font-bold">
                —Friend Today!”
              </h1>
              <img
                src={adoptImg}
                alt="Logo"
                className="absolute w-[180px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-40 right-5 xl:top-40 xl:right-2  lg:top-40 lg:right-5"
              />
            </div>
          </div>
          <div className="relative h-screen w-full max-h-80 lg:max-h-140 xl:max-h-165">
            <img
              src="https://i.ibb.co.com/k64gcJ8P/Blue-and-White-bacground-8.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="flex justify-between">
              <img
                src={dogHomeImg}
                alt="Logo"
                className="absolute w-[280px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-30 -left-6   lg:top-40 lg:left-5 xl:top-40 xl:left-2"
              />
              <h1 className="absolute whitespace-nowrap  top-10 left-20 text-2xl lg:top-50 lg:left-75 xl:top-50 xl:left-85  text-gray-900  lg:text-4xl xl:text-5xl font-bold">
                “Adopt, Don’t Shop —
              </h1>
              <h1 className="absolute whitespace-nowrap  top-20 left-55 lg:top-62 lg:left-110 xl:top-66 xl:left-140  text-gray-900 text-[16px] lg:text-2xl xl:text-3xl font-bold">
                Give a Pet a Home.”
              </h1>
              <img
                src={dogImg}
                alt="Logo"
                className="absolute w-[180px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-40 right-5 xl:top-40 xl:right-2  lg:top-40 lg:right-5"
              />
            </div>
          </div>
          <div className="relative h-screen w-full max-h-80 lg:max-h-140 xl:max-h-165">
            <img
              src="https://i.ibb.co.com/21xm54Tz/Blue-and-White-webp-10.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="flex justify-between">
              <img
                src={animalsCareImg}
                alt="Logo"
                className="absolute w-[220px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-20 -left-2   lg:top-40 lg:left-5 xl:top-40 xl:left-2"
              />
              <h1 className="absolute whitespace-nowrap  top-12 left-10 text-2xl lg:top-30 lg:left-55 xl:top-35 xl:left-75  text-gray-900  lg:text-4xl xl:text-5xl font-bold">
                “Because Every Pet Deserves
              </h1>
              <h1 className="absolute whitespace-nowrap  top-20 left-60 lg:top-40 lg:left-115 xl:top-50 xl:left-140  text-gray-900 text-[16px] lg:text-3xl xl:text-4xl font-bold">
                —Love and Care.”
              </h1>
              <img
                src={chairWithPet}
                alt="Logo"
                className="absolute w-[220px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-30 right-2 xl:top-50 xl:right-20  lg:top-50 lg:right-25"
              />
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Banner;
