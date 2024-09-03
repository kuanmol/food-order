import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import topMeal from './topMeal'; 
import CarosalItem from "./CarosalItem";

const MultiItemCarosal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:750,
        arrows: false
      };

    return (
        <div>
            <Slider {...settings}>
                {topMeal.map((item) => (
                    <CarosalItem image={item.image}
                        title={item.title} />))}
            </Slider>
        </div>
    )
}
export default MultiItemCarosal