import EmailSVG from "@/public/assets/svg_tsx/EmailSVG";
import FacebookSVG from "@/public/assets/svg_tsx/FacebookSVG";
import InstagramSVG from "@/public/assets/svg_tsx/InstagramSVG";
import TwitterSVG from "@/public/assets/svg_tsx/TwitterSVG";
import Link from "next/link";
import React, { ReactNode } from "react";

type tSocialLink = {
  link: string;
  icon: ReactNode;
  id: string;
};
const socials: tSocialLink[] = [
  {
    id: "facebook",
    link: "/facebook",
    icon: <FacebookSVG />,
  },
  {
    id: "instragram",
    link: "/instragram",
    icon: <InstagramSVG />,
  },
  {
    id: "twitter",
    link: "/twitter",
    icon: <TwitterSVG />,
  },
  {
    id: "email",
    link: "/email",
    icon: <EmailSVG />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socials.map(({ icon, id, link }: tSocialLink) => {
        return (
          <Link
            href={link}
            key={id}
            className="bg-white rounded-full p-2 text-white flex justify-center items-center w-[36px] h-[36px]"
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
