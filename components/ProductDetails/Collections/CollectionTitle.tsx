import Link from "next/link";

type tCollectionTitle = {
  title: string;
  seeAllLink: string;
};
const CollectionTitle = ({ title, seeAllLink }: tCollectionTitle) => {
  return (
    <div className="pb-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <Link href={seeAllLink} className="text-sm underline">
        View All
      </Link>
    </div>
  );
};

export default CollectionTitle;
