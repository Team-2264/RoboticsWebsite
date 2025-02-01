import ImageGallaryComponent from '../components/image-gallery.component';
import Footer from '../components/footer';
import NavBar from '../components/NavBar';
import ImageDataDict from "../data/ImageData";

const ImageDisplay = () => {
  return (
    <div>
    <NavBar />
    <div className="App image-container">
      <ImageGallaryComponent imageData={ImageDataDict}/>
    </div>
    <Footer />
    </div>
  );
};
export default ImageDisplay;