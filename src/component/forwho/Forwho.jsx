import ForwhoCard from "./ForwhoCard";

const ahisForData = [
  {
    title: "Exhibitors",
    description:
      "Generate leads, close deals, and build your brand in Africa's housing market. Showcase your products and services to a targeted audience of developers, investors, government officials, and industry professionals.",
    buttonText: "Book Your Booth",
  },
  {
    title: "Sponsors",
    description:
      "Gain unparalleled visibility and access to Africa's housing ecosystem. Align your brand with innovation, sustainability, and growth in one of the world's most dynamic markets.",
    buttonText: "View Packages",
  },
  {
    title: "Attendees",
    description:
      "Learn from industry leaders, discover the latest innovations, and connect with key players shaping Africa's housing market. Whether you are a developer, investor, government official, or industry professional, AHIS offers unparalleled opportunities to connect, learn, and grow in Africa's housing sector.",
    buttonText: "Register Now",
  },
];

function Forwho() {
  return (
    <section className="mx-auto w-full rounded-lg bg-gray-100 px-6 py-8 text-sm text-black shadow-md sm:px-4 md:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-black">Who Is AHIS For?</h1>
        <p className="mt-2 max-w-3xl text-gray-500">
          Whether you are a developer, investor, government official, or
          industry professional, AHIS offers unparalleled opportunities to
          connect, learn, and grow in Africa&apos;s housing sector.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-9 md:ml-2">
        {ahisForData.map((item) => (
          <ForwhoCard
            key={item.title}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </section>
  );
}

export default Forwho;