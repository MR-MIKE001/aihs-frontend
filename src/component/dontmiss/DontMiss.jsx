import dontmiss from "../../assets/dontmiss.JPEG";
import Button from "../button/Button";

function DontMiss() {
  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
      {/* Background image */}
      <img
        src={dontmiss}
        alt="Don't Miss"
        className="h-full w-full object-cover"
      />

      {/* Overlay + content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/90 px-4">
        <div className="pointer-events-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-sm font-semibold text-[#f3eaea] sm:text-base md:text-lg lg:text-xl">
            Don&apos;t miss your chance to showcase your brand at Africa&apos;s
            largest housing event. Premium locations are filling up fast! Book
            your exhibition space now to connect with industry leaders and drive
            business growth.
          </p>

          <div className="mt-4 sm:mt-6">
            <Button buttonText="Book Exhibition Space" buttonType="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DontMiss;
