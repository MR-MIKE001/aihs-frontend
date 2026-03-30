import expe1 from "../../assets/exp1.jpg";
import expe2 from "../../assets/exp2.jpg";
import expe3 from "../../assets/exp4.jpg";
import expe4 from "../../assets/exp5.jpg";
import expe5 from "../../assets/exp6.jpg";
import expe6 from "../../assets/exp7.jpg";
import expe7 from "../../assets/exp4.png";

const images = [
  { src: expe1, alt: "AHIS experience 1", className: "md:col-span-2" },
  { src: expe2, alt: "AHIS experience 2" },
  { src: expe4, alt: "AHIS experience 3" },
  { src: expe3, alt: "AHIS experience 4", className: "md:col-span-2" },
  { src: expe5, alt: "AHIS experience 5" },
  { src: expe6, alt: "AHIS experience 6" },
  { src: expe7, alt: "AHIS experience 7" },
];

function ExperienceImg() {
  return (
    <section className="w-full px-4 py-6 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.alt}
            className={`group overflow-hidden rounded-2xl ${image.className || ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72 md:h-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceImg;