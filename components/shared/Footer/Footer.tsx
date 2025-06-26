import React from "react";
import SiteLogo from "../SiteLogo";
import SubscribeForm from "./SubscribeForm";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import { companyLinks, informationLinks, shopLinks } from "@/static";
import Copywrites from "./Copywrites";

const Footer = () => {
  return (
    <div className="bg-background-secondary container-padding w-full">
      {/* Footer Content */}
      <div className="flex md:flex-row flex-col gap-10 md:gap-[15%] py-[72px]">
        {/* logo section with subscibe */}
        <div className="flex flex-col gap-[20px] w-[310px]">
          <div className="flex flex-col gap-[40px]">
            <SiteLogo />
            <SubscribeForm />
          </div>
          <SocialLinks />
        </div>
        {/* site Links Section*/}
        <div className="flex lg:flex-nowrap flex-wrap gap-16 md:gap-[120px]">
          <FooterLinks title={shopLinks.title} links={shopLinks.links} />
          <FooterLinks
            title={informationLinks.title}
            links={informationLinks.links}
          />
          <FooterLinks title={companyLinks.title} links={companyLinks.links} />
        </div>
      </div>

      {/* copywrites Section */}
      <Copywrites />
    </div>
  );
};

export default Footer;
