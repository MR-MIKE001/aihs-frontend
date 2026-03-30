import ExperienceImg from "./ExperienceImg"

function Experience() {
  return (
   <div className=" py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#000000]">Experience AIHS</h2>
          <p className="mt-4 text-gray-600">
            Immerse yourself in a dynamic environment where innovation meets opportunity. At AIHS, you will experience:
          </p>
        </div>
        <div className="mt-10 max-w-6xl px-6 sm:px-10 md:px-15 ">
        <ExperienceImg/>
        </div>
      </div>
  )
}

export default Experience