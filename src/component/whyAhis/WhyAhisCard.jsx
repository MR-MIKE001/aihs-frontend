import WhyAhisIcon from "./WhuAhisIcon"

function WhyAhisCard({title, description,icon}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex w-10 h-10 rounded-2xl items-center justify-center mb-4 bg-[#000000]">
        <WhyAhisIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>  
  )
}

export default WhyAhisCard