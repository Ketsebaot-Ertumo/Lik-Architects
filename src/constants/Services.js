import React from "react";
import { Link } from "react-router-dom";



const Services = () => {
    

    const Data =
            [
                {
                    name: "Architectural Design",
                    description: "Artfully shaping spaces for functionality and beauty, blending form and purpose harmoniously.",
                }, 
                {
                    name: "Interior Design",
                    description: "Crafting harmonious and functional spaces by blending aesthetics, materials, and furnishings to create personalized and inviting environments.",
                },
                {
                    name: "Construction Works",
                    description: "Translating architectural designs into physical structures through excavation, foundation work, assembly, and finishing touches.",
                },
                {
                    name: "Finishing Works",
                    description: "Enhancing aesthetics and functionality through meticulous installation, completing the project with attention to detail and final touches.",
                },
                {
                    name: "Construction Supervission",
                    description: "Overseeing projects, ensuring compliance, quality, safety, and timely completion, while coordinating contractors and maintaining communication.",
                },
            ]
    

    return (
        <>

            <div className="grid grid-cols-3 sm:gap-5 p-5 sm:py-10 sm:px-20 bg-white text-black">
                {Data.map((item, index) => (
                    <div key={index}>
                        <div className="p-5">
                            <p className="text-2xl font-semibold pb-4 text-center">{item.name}</p>
                            <p className="">{item.description}</p>
                            <Link to=''><p className="text-blue-500 italic mt-5 sm:px-2">Learn More..</p></Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Services;

