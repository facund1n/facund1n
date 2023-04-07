import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        margin: "-0.5rem 1rem 0 0",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        margin: "-0.8rem 0 0 1rem",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

const render = () => {
  let settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

const GallerySlider = ({ settings }) => {
  return (
    <>
      <h2 className="font-green-light" id="portfolio">
        Portfolio
      </h2>

      <Slider {...settings}>
        <div>
          <button>
            <a href="https://3i-show.vercel.app/" target="_blank">
              View page: Heavy Metal Blog
            </a>
          </button>
          <hr />
          <img src="hbm-preview.png" alt="hmb-preview" className="img-fluid" />
        </div>
        <div>
          <button>
            <a href="https://html-css-review.vercel.app/" target="_blank">
              View page: Simple HTML + CSS
            </a>
          </button>
          <hr />
          <img
            src="bkmesa-preview.png"
            alt="bkmesa-preview"
            className="img-fluid"
          />
        </div>
      </Slider>
    </>
  );
};

export default GallerySlider;
