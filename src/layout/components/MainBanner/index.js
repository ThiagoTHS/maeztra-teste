import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';

import arrow from '../../assets/icon-arrow.svg'

// import foto from '../../assets/mobile_banner-01.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
// const imagens=[]

// const imagens = [foto, foto, foto, foto, foto, foto, foto, foto, foto,]

const arrowButtonright = (
  <button class="banner__arrow banner__arrow--right " type="button">
    <img src={arrow} alt='arrow right'/>
  </button>
)
const arrowButtonleft = (
  <button class="banner__arrow banner__arrow--left " type="button">
    <img src={arrow} alt='arrow left'/>
  </button>
)

function MainBanner({imagens}) {
  return (
    <Carousel
      responsive={responsive}
      imagens={imagens}
      // swipeable={false}
      // draggable={false}
      showDots={true}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={true}
      // autoPlaySpeed={3000}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      // containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="banner__dots"
      customRightArrow={arrowButtonright}
      customLeftArrow={arrowButtonleft}
      // itemClass="carousel-item-padding-40-px"
    >
      {imagens.map((image) => {
        return(
          <a className="banner" href='#'>
            <img src={image} alt='foto'/>
          </a>
        )
      })}
    </Carousel>
  );
}

export default MainBanner;
