import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dogAndCats from "../../assets/bannerImg/dogAndCats-removebg-preview.png";
import adoptImg from "../../assets/bannerImg/Adopt-removebg-preview.png";

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
              src="https://i.ibb.co.com/N5vRdDw/Blue-and-White-Watercolor-Castle-Wedding-Poster-11.png"
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
                -Friend Today!”
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
              src="https://i.ibb.co.com/DxhTMXq/Blue-and-White-Watercolor-Castle-Wedding-Poster-8.png"
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
                -Friend Today!”
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
              src="https://i.ibb.co.com/tTQtvKvK/Blue-and-White-Watercolor-Castle-Wedding-Poster-10.png"
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
                -Friend Today!”
              </h1>
              <img
                src={adoptImg}
                alt="Logo"
                className="absolute w-[180px] lg:h-[300px] lg:w-[400px] xl:w-[500px] xl:h-[400px] rounded-2xl top-40 right-5 xl:top-40 xl:right-2  lg:top-40 lg:right-5"
              />
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Banner;
