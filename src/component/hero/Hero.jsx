import Button from "../button/Button";
import HeroImages from "../heroImages/HeroImages";

function Hero() {
  return (
    <section className="w-full bg-[linear-gradient(45deg,_#ffffff_0%,_#ffffff_50%,_#eef7ff_50%,_#eef7ff_100%)]">
      <div className="mx-auto flex max-w-6xl flex-col md:h-96 md:flex-row md:px-20 px-6 sm:px-10 gap-6 md:gap-4 py-8 md:py-0">
        {/* Top on small, left on md+ */}
        <div className="flex  w-full flex-col justify-center md:w-3/5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#1843b5]">
            Africa&apos;s Largest Housing Event
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
            Meet investors, developers, and government leaders shaping Africa&apos;s housing market.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button buttonText="Register Now" buttonType="primary" />
            <Button buttonText="Book Exhibition Space" buttonType="secondary" />
          </div>
        </div>

        {/* Bottom on small, right on md+ */}
        <div className="flex w-full items-center justify-center md:w-2/5 ">
          <HeroImages />
        </div>
      </div>
    </section>
  );
}

export default Hero;
