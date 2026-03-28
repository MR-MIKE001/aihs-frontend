import intropic1 from "../../assets/intopic1.jpg";
import intropic2 from "../../assets/intropic2.jpg";
import intropic3 from "../../assets/intropic3.jpg";
import intropic4 from "../../assets/intropic4.jpg";

function HeroImages() {
  return (
    <div className="relative mx-auto mt-6 flex w-full max-w-sm items-center justify-center px-4 py-6 sm:max-w-md md:max-w-lg">
      {/* Base image */}
      <img
        src={intropic1}
        alt="Image 1"
        className="w-40 h-28 rounded-2xl object-cover sm:w-52 sm:h-32 md:w-64 md:h-40 shadow-lg"
      />

      {/* Overlapping images */}
      <img
        src={intropic2}
        alt="Image 2"
        className="absolute -bottom-6 left-2 w-28 h-24 rounded-2xl object-cover sm:w-32 sm:h-28 md:w-40 md:h-32 md:-bottom-8 md:-left-4 shadow-lg"
      />

      <img
        src={intropic3}
        alt="Image 3"
        className="absolute -top-4 right-4 w-28 h-20 rounded-2xl object-cover sm:w-32 sm:h-24 md:w-40 md:h-28 md:-top-6 md:right-0 shadow-lg"
      />

      <img
        src={intropic4}
        alt="Image 4"
        className="absolute bottom-4 -right-6 w-24 h-20 rounded-2xl object-cover sm:w-28 sm:h-24 md:w-36 md:h-28 md:bottom-2 md:-right-10 shadow-lg"
      />
    </div>
  );
}

export default HeroImages;
