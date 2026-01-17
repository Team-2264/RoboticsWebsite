import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../site-theme.css';
class ImageGallaryComponent extends React.Component {
    
    render() {
       console.log(this.props.imageData);
       let windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl);
        let year=params.get("year");
        if (year===null){
            year=new Date().getFullYear();
        }
        let path=params.get("event");
        if (path===null){
            path="";
        }
       const imgData = this.props.imageData.filter(p => {return p.year===year && p.path===path}).map(imgDetail => 
        <div  className="slider-item-div">
                        <img src={`/roboimages/${imgDetail.path}/${imgDetail.image_src}`} alt=""/>
                         <p className="legend">{imgDetail.image_legend} </p>
                     </div>
      );
       return (
            <div  className="slider-container">
                <Carousel  className="carousel-style" autoPlay interval="5000" transitionTime="5000">
                    {imgData}
                </Carousel>
            </div>
                    )
    };
}

export default ImageGallaryComponent;