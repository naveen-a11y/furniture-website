import Image from "next/image";
import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import logo from "../public/assets/logo.png";

const menuLinks = [
    { label: "Home", link: "" },
    { label: "Services", link: "" },
    { label: "About Us", link: "" },
    { label: "Blog", link: "" },
    { label: "Portfolio", link: "" },
    { label: "Contacts", link: "" },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-[#222]">
            <div className="flex justify-between items-center max-w-[1200px] m-auto p-4 lg:px-8">
                <div>
                    <div className="relative cursor-pointer w-24 h-8 md:w-32 md:h-10 lg:w-40 lg:h-12">
                        <Image src={logo} layout="fill" position="absolute" />
                    </div>
                </div>
                <div className="md:hidden">
                    {open ? (
                        <XIcon
                            className="w-6 h-6 text-white cursor-pointer hover:text-gray-200"
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <MenuAlt1Icon
                            className="w-6 h-6 text-white cursor-pointer hover:text-text-gray-200"
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>
                <div className="hidden md:flex md:text-white">
                    {menuLinks.map((item) => (
                        <p
                            className="ml-8 cursor-pointer hover:text-gray-200"
                            key={item.label}
                        >
                            {item.label}
                        </p>
                    ))}
                </div>
            </div>
            {open && (
                <div className="text-center text-white p-4 bg-[#222]">
                    {menuLinks.map((item) => (
                        <p
                            className="hover:bg-[#333] p-2 cursor-pointer rounded-md"
                            key={item.label}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </p>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
