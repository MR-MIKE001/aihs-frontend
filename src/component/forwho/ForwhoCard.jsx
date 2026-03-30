import ForwhoIcon from "./ForwhoIcon"

function ForwhoCard({title, description,buttonText}) {
    
  return (
    <div className="flex w-[300px] flex-col items-start gap-4 rounded-lg bg-gray-300 px-4 py-6 text-sm text-gray-300 shadow-md sm:max-w-sm md:max-w-none">
        <div className="rounded-full bg-[#370cb9] p-3">
            <ForwhoIcon name={title.toLowerCase()} />
        </div>
        <h2 className="text-lg font-bold text-[#000000]">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
        <button className="mt-auto rounded bg-[#370cb9] px-4 py-2 text-sm text-white hover:bg-[#0f2a8c]">
            {buttonText}
        </button>
    </div>
  )
}

export default ForwhoCard