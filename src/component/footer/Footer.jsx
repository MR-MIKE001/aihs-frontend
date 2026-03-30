import logo from "../../assets/ahia.png";
import instagram from "../../assets/instagram1.svg";
import facebook from "../../assets/facebook1.svg";
import x from "../../assets/x1.svg";
import linkedin from "../../assets/linkedin1.svg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <hr className="border-2 border-[#1606f4] bg-[#1606f4]" />

      <footer className="bg-[#020527] py-8 text-gray-600 ">
        <div className="mx-auto  max-w-6xl px-4">
          {/* Top section */}
          <div className="flex flex-col items-center justify-between gap-18 text-center sm:flex-row sm:items-start sm:text-left  ">
            {/* Logo + about + socials */}
            <div className="flex-1 ">
              <img src={logo} alt="AIHS Logo" className="h-12 w-auto" />
              <p className="mt-3 text-sm text-gray-400 ">
                Africa International Housing Show (AIHS) is the largest housing
                and construction event in Africa, connecting stakeholders to
                drive growth and innovation in the housing sector.
              </p>

              <div className="mt-4 flex justify-center gap-4 sm:justify-start">
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/search/top?q=africa%20international%20housing%20show"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AIHS on Facebook"
                >
                  <img src={facebook} alt="AIHS on Facebook" className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200" />
                </a>
                <a href="https://x.com/AIHS2023?s=20" target="_blank" rel="noreferrer" aria-label="AIHS on Twitter">
                  <img src={x} alt="AIHS on Twitter" className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200" />
                </a>
                <a href="https://www.instagram.com/africahousingshow/" target="_blank" rel="noreferrer" aria-label="AIHS on Instagram">
                <img src={instagram} alt="AIHS on Instagram" className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200" />
                </a>
                <a href="https://www.linkedin.com/company/africa-international-housing-show/" target="_blank" rel="noreferrer" aria-label="AIHS on LinkedIn">
                <img src={linkedin} alt="AIHS on LinkedIn" className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200" />
                </a>

                {/* Add more icons (X, Instagram, LinkedIn) here */}
              </div>
            </div>

            {/* Contact block */}
            <div className="flex-1">
              <p className="mb-2 text-sm font-semibold text-[#f8ecec]">
                Contact us:
              </p>
              <p className="mb-1 text-sm">
                <span className="font-semibold text-[#cfc4c4]">Email:</span>{" "}
                <a
                  href="mailto:africahousingshow@gmail.com"
                  className="text-[#6d6565] hover:underline"
                >
                  africahousingshow@gmail.com
                </a>
              </p>
              <p className="mb-1 text-sm">
                <span className="font-semibold text-[#cfc4c4]">Phone:</span>{" "}
               <a href="tel:+2349165000000" className="text-[#6d6565] hover:underline">
                 +234 916 500 0000
                </a>
              </p>
              <p className="mb-1 text-sm">
                <span className="font-semibold text-[#cfc4c4]">Address:</span>{" "}
                Transcorp Hilton Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
            <p>&copy; {year} AIHS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
