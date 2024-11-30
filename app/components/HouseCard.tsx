import Image from "next/image";
import Link from "next/link";

type House = {
  image: string;
  name: string;
  description: string;
  link: string;
};

export default function HouseCard({ house }: { house: House }) {
  return (
    <div className="relative w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      {/* House Image */}
      <Image
        src={house.image}
        alt={`Image of ${house.name}`}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Card Content */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-4">
        <h2 className="text-lg font-semibold">{house.name}</h2>
        <p className="text-sm">{house.description}</p>
      </div>

      {/* Link Wrapper */}
      <Link
        href={house.link}
        className="absolute inset-0"
        aria-label={`Go to ${house.name} page`}
      />

    </div>
  );
}
