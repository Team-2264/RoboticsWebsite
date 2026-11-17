
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ImageGallaryComponent extends React.Component {

    render() {
        const params = new URLSearchParams(window.location.search);

        const year = params.get("year") || String(new Date().getFullYear());
        const path = params.get("event") || "";

        const imgData = this.props.imageData
            .filter(p =>
                String(p.year) === String(year) &&
                p.path === path
            )
            .map((imgDetail, index) => (
                <div
                    key={`${imgDetail.image_src}-${index}`}
                    style={{
                        width: "100%",
                        backgroundColor: "#111"
                    }}
                >
                    <img
                        src={`/roboimages/${imgDetail.path}/${imgDetail.image_src}`}
                        alt=""
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "600px",
                            objectFit: "contain",
                            display: "block",
                            margin: "0 auto"
                        }}
                    />
                </div>
            ));

        if (imgData.length === 0) return null;

        return (
            <div style={{
                width: "100%",
                maxWidth: "1100px",
                margin: "30px auto",
                overflow: "hidden",
                borderRadius: "12px"
            }}>

                <style>{`
                    .gallery-carousel .slider-wrapper {
                        overflow: hidden;
                    }

                    .gallery-carousel .slide {
                        background: #111 !important;
                    }

                    .gallery-carousel .slide .legend {
                        display: none !important;
                    }

                    .gallery-carousel .control-dots {
                        margin-bottom: 12px;
                    }

                    .gallery-carousel .control-dots .dot {
                        box-shadow: none;
                        opacity: 0.35;
                        transition: opacity 0.3s ease;
                    }

                    .gallery-carousel .control-dots .dot.selected {
                        opacity: 1;
                    }

                    .gallery-carousel .control-arrow {
                        opacity: 0.7;
                        transition: opacity 0.2s ease;
                    }

                    .gallery-carousel .control-arrow:hover {
                        opacity: 1;
                    }

                    @media (max-width: 768px) {
                        .gallery-carousel .slide img {
                            max-height: 400px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .gallery-carousel .slide img {
                            max-height: 300px !important;
                        }
                    }
                `}</style>

                <Carousel
                    className="gallery-carousel"
                    autoPlay
                    infiniteLoop
                    interval={6000}
                    transitionTime={700}
                    animationHandler="fade"
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={true}
                    showLegend={false}
                    stopOnHover
                    swipeable
                    emulateTouch
                    useKeyboardArrows
                >
                    {imgData}
                </Carousel>

            </div>
        );
    }
}

export default ImageGallaryComponent;
