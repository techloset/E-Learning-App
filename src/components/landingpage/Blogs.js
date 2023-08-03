import React, { useState } from 'react';

// Card component
const Card = ({ title, description, image, onClick }) => (
    <div className="max-w-sm mx-auto cursor-pointer bg-white rounded-xl shadow-md overflow-hidden mb-4" onClick={onClick}>
        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <img src={image} alt="Card Image" className="w-full h-56 object-cover md:w-48" />
            </div>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-500">{description}</p>
                <a href="#" className="mt-4 inline-block text-blue-500">Read More</a>
            </div>
        </div>
    </div>
);

export default function Blogs() {
    const [cardDetails, setCardDetails] = useState({
        title: 'Heading',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720',
    });

    const showCardDetails = (title, description, image) => {
        setCardDetails((prevDetails) => ({
            ...prevDetails,
            title,
            description,
            image,
        }));
    };

    return (
        <div className="flex">
            <div className="w-1/2 me-10 px-5">
                {/* Left side content */}
                <img src={cardDetails.image} className="w-[780%] h-[50%] rounded-lg" alt="Left Side Image" />
                <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-full">Button</button>
                <h1 className="text-2xl font-bold mt-4">{cardDetails.title}</h1>
                <p className="mt-2 mb-5">{cardDetails.description}</p>
            </div>

            <div className="w-1/2">
                {/* Right side content */}
                <Card
                    title="Awais"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. awais"
                    image="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=720"
                    onClick={() =>
                        showCardDetails(
                            'Awais',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit awais.',
                            'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=720'
                        )
                    }
                />

                <Card
                    title="Bilal"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bilal"
                    image="https://a0.muscache.com/im/pictures/ab61d106-3c6e-4f4f-a9d6-3f16cfa3eaeb.jpg?im_w=720"
                    onClick={() =>
                        showCardDetails(
                            'Bilal',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit bilal.',
                            'https://a0.muscache.com/im/pictures/ab61d106-3c6e-4f4f-a9d6-3f16cfa3eaeb.jpg?im_w=720'
                        )
                    }
                />

                <Card
                    title="Waqas Ahmad"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. waqas"
                    image="https://a0.muscache.com/im/pictures/881f0d54-6449-402a-8ffe-499664d302bf.jpg?im_w=720"
                    onClick={() =>
                        showCardDetails(
                            'Waqas Ahmad',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. waqas',
                            'https://a0.muscache.com/im/pictures/881f0d54-6449-402a-8ffe-499664d302bf.jpg?im_w=720'
                        ) 
                    }
                />
            </div>
        </div>
    );
}
