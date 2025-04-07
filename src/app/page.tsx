import Image from "next/image";
import Link from "next/link";
import img from "../../public/backreceipe.png";
import Header from "./_components/Header"; // Import the Header component

export const metadata = {
  title: "Home",
  description: "Recipes website"
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
          src={img}
          alt="hero"
          fill
          className="object-cover filter brightness-50"
        />
        <div className="absolute z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 drop-shadow-lg">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
         Explore a world of flavors and create amazing meals with our collection of easy-to-follow recipes.
          </p>
          <Link
            href="/recipes"
            className="bg-gray-800 px-7 py-4 text-white text-xl font-semibold hover:bg-red-900 transition-all  shadow-lg rounded-lg"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
