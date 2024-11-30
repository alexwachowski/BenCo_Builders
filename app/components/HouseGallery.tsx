import HouseCard from "./HouseCard";

export default function HouseGallery() {
  const houses = [
    {
      name: "Cozy Cottage",
      description: "A quaint and comfortable home in the countryside.",
      image: "/images/cozy-cottage.jpg",
      link: "/houses/cozy-cottage",
    },
    {
      name: "Modern Villa",
      description: "A luxurious and stylish villa with modern amenities.",
      image: "/images/modern-villa.jpg",
      link: "/houses/modern-villa",
    },
    {
      name: "Beachside Bungalow",
      description: "A relaxing retreat steps away from the ocean.",
      image: "/images/beachside-bungalow.jpg",
      link: "/houses/beachside-bungalow",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-[#c6c6b2]">
      {houses.map((house, index) => (
        <div
        key={index}
        className="flex justify-center items-center" // Center each card
      >
        <HouseCard house={house} />
      </div>
      ))}
    </section>
  );
}
