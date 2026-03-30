import Button from "../button/Button";

function Join() {
  return (
    <section className="bg-[#170648] px-4 py-12 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          Join Africa&apos;s Biggest Housing Event
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
          Don&apos;t miss the opportunity to be part of Africa&apos;s housing
          revolution. Join us at AIHS and connect with industry leaders,
          innovators, and change-makers shaping the future of housing in Africa.
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            buttonText="Register Now"
            buttonType="primary"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Join;