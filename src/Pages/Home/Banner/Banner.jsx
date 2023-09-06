import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/blogs/blogImage.jpg';

const Banner = () => {
    return (
        <div className="lg:h-full lg:w-full">
            <Carousel >
                <div className="relative lg:h-[90vh]">
                    <img className="h-full" src={img1} alt="Banner Image" />
                    <div className="absolute top-[25%] md:top-[35%] lg:top-[35%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2 ">
                        <p className="text-orange-400 lg:text-xl mb-2">We Offer Can You Help</p>
                        <h1 className="lg:text-6xl font-serif leading-tight sm:text-2xl md:text-3xl">BETTER <br /> WORLD FOR OUR <br /> CHILDREN</h1>
                    </div>
                </div>
                <div className="relative lg:h-[90vh] ">
                    <img className="" src={img1} alt="Banner Image" />
                    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2">
                        <p className="text-orange-400 text-xl">We Offer Can You Help</p>
                        <h1 className="text-6xl font-serif leading-tight">BETTER <br /> WORLD FOR OUR <br /> CHILDREN</h1>
                    </div>
                </div>
                <div className="relative lg:h-[90vh]">
                    <img className="" src={img1} alt="Banner Image" />
                    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2">
                        <p className="text-orange-400 text-xl">We Offer Can You Help</p>
                        <h1 className="text-6xl font-serif leading-tight">BETTER <br /> WORLD FOR OUR <br /> CHILDREN</h1>
                    </div>
                </div>
                <div className="relative lg:h-[90vh]">
                    <img className="" src={img1} alt="Banner Image" />
                    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 p-4 bg-opacity-0  text-white transition-transform hover:-translate-y-2">
                        <p className="text-orange-400 text-xl">We Offer Can You Help</p>
                        <h1 className="text-6xl font-serif leading-tight">BETTER <br /> WORLD FOR OUR <br /> CHILDREN</h1>
                    </div>
                </div>




            </Carousel>
        </div>
    );
};

export default Banner;
