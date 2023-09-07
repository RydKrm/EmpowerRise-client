import React, { useState } from 'react';

const images = [
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_1.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_2.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_3.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_4.jpg',
    'https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/campaign_5.jpg', // Added an extra image URL
    // Add more image URLs as needed
];

const imageTexts = [
    {
        title: 'Mountain Bikes for WA Children’s Shelter',
        description: "The Northwest Arkansas Children's Shelter (NWACS) is a private, non-profit organization that provides 24-hour residential, emergency triage care for children throughout Arkansas.",
    },
    {
        title: 'Minivan Build Match, Double Your Gift',
        description: "Contribute to October's Minivan Build in Pahrump, and toward another build in 2020. An anonymous donor will match your gift, dollar for dollar. Together, are raising $10,000 to create homes on wheels for those in need.",
    },
    {
        title: "Krista's Climb for a Cause",
        description: "Help me raise money for the underprivileged children of Nepal. Together we can make a change in the lives of children who are victims of human trafficking and help create a better future for those who need it the most.",
    },
    {
        title: 'New American Riders: Bicycles for refugees in Western Mass',
        description: 'With our partners at the Jewish Family Service of Western Massachusetts, RadSpringfield will be furnishing recently resettled and newly employed refugees with bicycles, helmets, locks, lights, and rider safety education.',
    },
    {
        title: 'The "Young Ones" Can Give Back 2',
        description: 'To reach as much possible orphanages before Christmas To raise enough money before Christmas in order to start wrapping the Christmas gifts To raise the set amount of money to buy clothes and food',
    },
    // Add more text as needed
];

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
        <section className=" mb-10">
            <div className="container mx-auto relative flex">
                {/* Left Side Image */}
                <div className="w-1/2 p-4 ">
                    <img
                        src={images[currentImageIndex]}
                        alt="Campaign"
                        className="w-full h-auto"
                    />
                    <div className='absolute w-[400px] h-[300px] top-4 left-[35%]  bg-white p-4 box-border'>
                        <h1 className="text-lg font-bold mb-2 mt-2">{imageTexts[currentImageIndex].title}</h1>
                        <p className="text-sm  mb-2">{imageTexts[currentImageIndex].description}</p>
                        <div className='flex justify-center'>
                            <button className=" mt-2 mb-2 bg-blue-500 text-white p-3 rounded-md">Donate</button>
                        </div>
                    </div>
                </div>

                {/* Right Side Buttons */}
                <div className="lg:absolute bottom-0 left-[62%] mb-6 mr-6 flex items-center space-x-2">
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
        </section>
    );
};

export default FeaturedCampaign;
