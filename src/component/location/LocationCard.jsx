import LocationCardDetails from "./LocationCardDetails";

function LocationCard() {
  return (
    <div className="w-full max-w-3xl  mx-auto rounded-lg bg-[#06063c] px-4 py-6 text-sm text-gray-300 shadow-md sm:px-2  md:px-2">
      {/* Top row: location + date */}
      <div className="flex flex-col w-[80%] mx-auto items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              height="16"
              width="16"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M8 16s7 -3.5 7 -9c0 -3.86599 -3.134 -7 -7 -7 -3.86599 0 -7 3.13401 -7 7 0 5.5 7 9 7 9Zm0 -7c1.10457 0 2 -0.89543 2 -2s-0.89543 -2 -2 -2 -2 0.89543 -2 2 0.89543 2 2 2Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="text-sm sm:text-base">
            Transcorp Hilton Abuja, Nigeria
          </p>
        </div>

        {/* Divider on md+ */}
        <div className="hidden h-8 border-l-2 border-[#e9dfdf] sm:block" />

        {/* Date */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              height="16"
              width="16"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H13V0H12V1H4V0H3V1H2ZM2 3H14V5H2V3ZM2 6H14V14H2V6Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="text-sm sm:text-base">July 13–18, 2026</p>
        </div>
      </div>

      {/* Horizontal divider */}
      <hr className="mt-5 border-t-2 border-[#e9dfdf]" />

      {/* Stats grid */}
      <div className=" w-[80%] mx-auto mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <LocationCardDetails title="40,000+" detail="Attendees" />
        <LocationCardDetails title="20+" detail="Countries" />
        <LocationCardDetails title="200B+" detail="Deals Closed" />
        <LocationCardDetails title="500+" detail="Exhibitors" />
      </div>
    </div>
  );
}

export default LocationCard;
