import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';

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

function TipbarBrand({contents}) {
  return (
    <div className="tipbarbrand">
      <h3 className="tipbarbrand__title">Marcas Parceiras</h3>
      <Carousel
        responsive={responsive}
        contents={contents}
        arrows={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        itemClass="tipbarbrand__box"
      >
        {contents.map((content) => {
          return(
            <img className="tipbarbrand__brand" src={content} alt='foto'/>
          )
        })}
      </Carousel>
    </div>
  );
}

export default TipbarBrand;
