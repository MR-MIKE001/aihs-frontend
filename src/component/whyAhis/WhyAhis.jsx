import WhyAhisCard from "./WhyAhisCard"

const whyAhisData = [
    {
        title: "Access Decision-Makers",
        description: "Connect directly with government officials, developers, investors, and industry leaders shaping Africa's housing market.",
        icon: "access"
    },
    {
        title:"Maximum Exposure",
        description:"Showcase your products, services, and innovations to a targeted audience of industry professionals, investors, and decision-makers.",
        icon: "exposure"
    },
    {
        title:"Drive Investment",
        description:"Attract investors and secure funding for your projects by showcasing your innovative solutions and business opportunities.",
        icon: "networking"
    },
    {
        title:"Industry Insights",
        description:"Gain valuable insights into market trends, policy developments, and investment opportunities in Africa's housing sector.",
        icon: "insights"
    }
]

function WhyAhis() {
  return (
    <div className="bg-[#170648] py-10">
        <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-16">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
      Why Attend AIHS?
    </h2>
    <p className="mt-4 text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
      AIHS is the premier event for anyone involved in Africa&apos;s housing
      ecosystem. Here&apos;s why you should attend:
    </p>
  </div>
</section>
        <div className="mt-10 mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 md:px-20 lg:grid-cols-2">
          {whyAhisData.map((item) => (
            <WhyAhisCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>    
  )
}

export default WhyAhis