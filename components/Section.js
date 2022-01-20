import Image from "next/image";
import React from "react";

const projects = [
    {
        id: 1,
        title: "Last Projects",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
    },
    {
        id: 2,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/project1.jpg",
        buttonText: "More",
    },
    {
        id: 3,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/project2.jpg",
        buttonText: "More",
    },
    {
        id: 4,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/project3.jpg",
        buttonText: "More",
    },
    {
        id: 5,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        title: "Featured Services",
    },
    {
        id: 6,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/furniture.jpg",
        buttonText: "More",
        heading: "Furniture",
    },
    {
        id: 7,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/interior.jpg",
        buttonText: "More",
        heading: "Interior Design",
    },
    {
        id: 8,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque quisquam tempora doloribus, sequi sed voluptatibus molestias culpa mollitia inventore impedit illo, consectetur aliquid id asperiores dicta, pariatur amet tempore.",
        imgSrc: "../public/assets/project_management.png",
        buttonText: "More",
        heading: "Project Management",
    },
];

function Section() {
    return (
        <div className="p-8 max-w-[1200px] m-auto">
            <div className="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {projects.map((item) => (
                    <div key={item.id}>
                        {item.title && (
                            <h1 className="text-2xl my-2 text-bold md:text-4xl">
                                {item.title}
                            </h1>
                        )}
                        {item.imgSrc && (
                            <div className="relative w-full h-48 my-4 md:mb-2 lg:my-0">
                                <Image
                                    src={item.imgSrc}
                                    layout="fill"
                                    position="absolute"
                                    objectFit="contain"
                                    priority="true"
                                />
                            </div>
                        )}
                        {item.heading && (
                            <p className="text-xl text-bold my-1">
                                {item.heading}
                            </p>
                        )}
                        {item.description && <p>{item.description}</p>}
                        {item.buttonText && (
                            <button className="bg-[#cc3366] px-4 py-1 my-4 text-white">
                                {item.buttonText}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section;
