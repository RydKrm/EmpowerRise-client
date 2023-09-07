import React, { useState } from 'react';

const images = [
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_1.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_2.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_3.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_4.jpg',
]; // Add more image URLs as needed

const FeaturedCampaign = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className="max-w-screen-xl mx-auto relative">
            {/* Left Side Image */}
            <div className="w-1/2 p-4">
                <img
                    src={images[currentImageIndex]}
                    alt="Campaign"
                    className="w-full h-auto"
                />
            </div>

            {/* Right Side Buttons */}
            <div className="absolute bottom-0 right-0 mb-6 mr-6">
                <button
                    onClick={goToPreviousImage}
                    className="w-10 h-10 bg-transparent border border-black rounded-full hover:bg-cLightDarkBlue text-black"
                >
                    &lt;
                </button>
                <button
                    onClick={goToNextImage}
                    className="w-10 h-10 bg-transparent border border-black rounded-full hover:bg-cLightDarkBlue text-black ml-2"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default FeaturedCampaign;
