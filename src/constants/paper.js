import React from "react";



const Papers = () => {
    

    const Data =
            [
                {
                    name: "Mission",
                    description: "Provide innovative, efficient and sustainable solutions through exceptional client service, excellence in Architectural Design and ethics in practice."
                },
                {
                    name: "Vission",
                    description: "Aims to be amongst the leading Architectural Design Firms that are globally recognized, highly valued and respected by clients, colleagues and other industry leaders."
                },
                {
                    name: "Objective",
                    description: "Developing a participative approach to the process of creating attractive buildings, Promoting a practical approach to sustainable and efficient construction and Advocating a team approach and always being aware of the wider picture."
                }
            ]
    

    return (
        <>

            <div className="flex overflow-x-auto sm:block p-5 sm:py-10 sm:px-20 bg-white text-black">
                {Data.map((item, index) => (
                    <div key={index}>
                        <div className="p-5 ">
                            <p className="text-2xl font-semibold pb-4 text-center">{item.name}</p>
                            <p >{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Papers;

