import Image from "next/image";

const SiteLogo = () => {
  return (
    <Image
      src={"/assets/images/logo.png"}
      alt="SiteLogo"
      width={170}
      height={32}
    />
  );
};

export default SiteLogo;
