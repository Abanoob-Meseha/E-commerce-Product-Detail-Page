import Link from "next/link";
import React from "react";
type tFooterLink = {
  id: number;
  name: string;
  href: string;
};
type tFooterLinkProps = {
  title: string;
  links: tFooterLink[];
};
const FooterLinks = ({ title, links }: tFooterLinkProps) => {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <div className="flex flex-col gap-3 mt-4 ">
        {links.map(({ id, name , href }: tFooterLink) => {
          return <Link href={href}  key={id}>{name}</Link>;
        })}
      </div>
    </div>
  );
};

export default FooterLinks;
