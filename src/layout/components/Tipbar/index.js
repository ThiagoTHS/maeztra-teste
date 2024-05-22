import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.scss';
import { useDetectMobile } from "../../utils/utils";

// import foto from '../../assets/mobile_banner-01.jpg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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

function Tipbar({contents}) {
  return (
    <div className="tipbar">
      <h3 className="tipbar__title">Por que comprar na Maeztra?</h3>
      <Carousel
        responsive={responsive}
        contents={contents}
        // swipeable={false}
        // draggable={false}
        showDots={false}
        arrows={false}
        // centerMode={true}
        // partialVisible={true}
        // ssr={true} // means to render carousel on server-side.
        infinite={useDetectMobile() ? true : true}
        // autoPlay={true}
        // autoPlaySpeed={3000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="tipbar__box"
      >
        
        {contents.map((content) => {
          return(
            <div className="tipbar__item">
              <div>
                <img className="tipbar__item-icon" src={content.icon} alt='foto'/>
              </div>
              <div>
                <h4 className="tipbar__item-title">{content.title}</h4>
                <h5 className="tipbar__item-desc">{content.description}</h5>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}

export default Tipbar;
