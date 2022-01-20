import Image from "next/image";
import React from "react";
import heroImg from "../public/assets/banner.jpg";

function Banner() {
    return (
        <div className="bg-[#222]">
            <div className="max-w-[1200px] m-auto text-white p-8 lg:flex">
                <div className="lg:flex-[0.4] lg:pr-3">
                    <h1 className="text-2xl md:4xl lg:text-5xl">
                        MORE STYLES ACQUIRED BY DESIGN
                    </h1>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam itaque fugiat culpa nesciunt eum mollitia,
                        consequuntur nihil ullam. Ipsam ratione ad commodi
                        voluptatibus praesentium enim labore? Culpa ipsum harum
                        reiciendis.
                    </p>
                    <button className="bg-[#cc3366] px-4 py-1 mb-4">
                        Details
                    </button>
                </div>
                <div className="lg:flex-[0.6] lg:pl-3">
                    <div className="relative w-full h-56 border-8 border-white md:h-96 md:border-12">
                        <Image
                            src={heroImg}
                            layout="fill"
                            position="absolute"
                            priority="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
