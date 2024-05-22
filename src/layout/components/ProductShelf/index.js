import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDetectMobile } from "../../utils/utils";

import './styles.scss';

import ProductCard from '../ProductCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

function ProductShelf() {
  return (
    <div className="productshelf">
      <h3 className="productshelf__title">As Mais Pedidas</h3>
      <Carousel
        responsive={responsive}
        // swipeable={false}
        // draggable={false}
        // showDots={true}
        arrows={useDetectMobile() ? false : true}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // centerMode={true}
        // autoPlay={true}
        // autoPlaySpeed={3000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="productshelf__container"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>

    </div>
  );
}

export default ProductShelf;
