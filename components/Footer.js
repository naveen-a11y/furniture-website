import RssFeedIcon from "@mui/icons-material/RssFeed";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AddIcon from "@mui/icons-material/Add";

const socialmediaLinks = [
    { icon: <RssFeedIcon />, id: "feed" },
    { icon: <TwitterIcon />, id: "twitter" },
    { icon: <FacebookIcon />, id: "facebook" },
    { icon: <AddIcon />, id: "add" },
];

const posts = [
    { title: "Consectetur adipiscing eli", id: 1 },
    { title: "Nam iaculis pharetra purus qui", id: 2 },
    { title: "Etiam a odio nec mi convallis", id: 3 },
    { title: "Loremipsum dolor sit amet, co", id: 4 },
    { title: "Nulla nec ligula risus", id: 5 },
];

const links = [
    { title: "Furniture", id: 1 },
    { title: "Interior Design", id: 2 },
    { title: "Project Management", id: 3 },
    { title: "Aliquam erat volutpat", id: 4 },
    { title: "In pede mi, aliquet sit amet", id: 5 },
];

function Footer() {
    return (
        <div className="bg-[#333] text-gray-400">
            <div className="p-8 max-w-[1200px] m-auto md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <div className="flex my-2">
                    {socialmediaLinks.map((item) => (
                        <p
                            key={item.id}
                            className="cursor-pointer mr-4 hover:text-white"
                        >
                            {item.icon}
                        </p>
                    ))}
                </div>
                <div className="my-2">
                    <h1 className="text-xl text-white">RECENT POSTS</h1>
                    {posts.map((item) => (
                        <p
                            key={item.id}
                            className="my-2 cursor-pointer hover:text-white"
                        >
                            {item.title}
                        </p>
                    ))}
                </div>
                <div className="my-2">
                    <h1 className="text-xl text-white">LINKS</h1>
                    {links.map((link) => (
                        <p
                            key={link.id}
                            className="my-2 cursor-pointer hover:text-white"
                        >
                            {link.title}
                        </p>
                    ))}
                </div>
                <div className="my-2">
                    <h1 className="text-xl my-2 text-white">CONTACT US</h1>
                    <p className="hover:text-white cursor-pointer">
                        2256S Norfolk Street
                        <br />
                        Seattle, WA 98118-5648
                        <br />
                        Phone: 217-764-7449
                        <br />
                        Fax: 217-763-7912
                    </p>
                    <br />
                    <p className="hover:text-white cursor-pointer">
                        11754 East Marginal Way S Tukwila,
                        <br />
                        WA 98168
                        <br />
                        Phone: 217-204-0607
                        <br />
                        Fax: 563-558-3913
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
