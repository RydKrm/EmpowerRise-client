import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCampaign = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [imageTexts, setImageTexts] = useState([]);

   useEffect(()=>{
    axios.get('http://localhost:5000/getCampainDonation')
    .then(res=>{
       const imageUrls = res.data.map(item => item.image);
        const textData = res.data.map(item => ({ title: item.title, description: (item.description).slice(0,200),_id:item._id }));
        setImages(imageUrls);
        setImageTexts(textData);
    })
    .catch(err=>console.error(err));
   },[])

   // console.log("images ",imageTexts[0].description.slice(0, 4))

    const goToNextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const previousIndex =
            (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(previousIndex);
    };

    return (
        <section className="mb-10">
            {imageTexts.length >0 && <div className="container mx-auto md:relative ">
                {/* Left Side Image */}
                <div className=" w-full md:w-1/2 p-4 flex flex-col md:flex-row">
                    <img
                        src={images[currentImageIndex]}
                        alt="Campaign"
                        className="w-full h-auto  md:h-[400px]"
                    />
                    <div className='md:absolute md:w-[400px] md:h-[300px] md:top-4 md:left-[35%]  bg-white p-4 box-border shadow-lg'>
                        <h1 className="text-2xl font-poppins font-bold mb-2 mt-2 ">{imageTexts[currentImageIndex].title}</h1> 
                         <div dangerouslySetInnerHTML={{ __html: imageTexts[currentImageIndex].description }} className="text-sm text-justify mb-2 font-poppins my-5 " />
                        <div className='flex justify-start'>
                            <Link to={`/SingleDonation/${imageTexts[currentImageIndex]._id}`} className=" mt-2 mb-2 px-5 bg-violet-700 text-white p-3 rounded-md">Donate</Link>
                        </div>
                    </div>
                </div>
               

                {/* Slider Change Buttons */}
                <div className="md:absolute md:bottom-0 md:left-[62%] mb-6 mr-6  ms-10 md:ms-0 flex items-center space-x-2">
                    <button
                        onClick={goToPreviousImage}
                        className="w-10 h-10 bg-transparent border-2 text-base border-violet-500 rounded-full  hover:bg-white hover:text-violet-700 hover:border-violet-500  bg-violet-500 text-white">
                       <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        onClick={goToNextImage}
                        className="w-10 h-10 bg-transparent border-2 text-base border-violet-500 rounded-full  hover:bg-white hover:text-violet-700 hover:border-violet-500  bg-violet-500 text-white ml-2">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
             }
        </section>
    );
};

export default FeaturedCampaign;
