import logo from "../../assets/ahia.png";

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
            <div className="flex-1 pl-10 ">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/africa-international-housing-show/posts/?feedView=all/" target="_blank" rel="noreferrer" aria-label="AIHS on LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.25v-10h2.25v10zm-1.125-11.25c-.722 0-1.306-.584-1.306-1.306s.584-1.306 1.306-1.306 1.306.584 1.306 1.306-.584 1.306-1.306 1.306zm13.875 11.25h-2.25v-5c0-1.191-.021-2.723-1.661-2.723-1.662 0-1.917 1.299-1.917 2.641v5.082h-2.25v-10h2.158v1.367h.031c.301-.571 1.035-1.172 2.132-1.172 2.28 0 2.701 1.5 2.701 3.448v6.357z" />
                  </svg>
                </a>
                <a href="https://x.com/AIHS2023?s=20" target="_blank" rel="noreferrer" aria-label="AIHS on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.208-4.932 4.932 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.584-.666 2.497 0 1.722.877 3.243 2.209 4.135-.815-.026-1.583-.25-2.25-.623v.062c0 2.404 1.71 4.409 3.977 4.86-.417.113-.856.173-1.309.173-.32 0-.63-.031-.933-.088.631 1.969 2.462 3.401 4.633 3.441-1.698 1.33-3.839 2.122-6.165 2.122-.401 0-.797-.023-1.188-.069C2.192 21.29 4.797 22 7.548 22c9.057 0 14-7.506 14-14v-.637c-.961-.695-2.005-1.562-2.741-2z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/africahousingshow/" target="_blank" rel="noreferrer" aria-label="AIHS on Instagram">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-gray-200"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.518 2.497 5.785 2.225 7.15 2.163 8.416 2.105 8.796 2.094 12 2.094m0-2C8.741 0 8.332 0 .001 0S0 .741 0 4s0 4 .001 4c0 .741 3 .741 7 .741s7-.741 7-.741c0-.741-.001-3-.001-4s0-4-.001-4c0-.741-3-.741-7-.741zM12 5a7 7 0 100 14A7 7 0 0012 5zm0 11a4 4 0 110-8A4 4 0 0112 16zm6.406-11a1.44 1.44 0 11-2.88-.001A1.44 1.44 0 0118.406 5z" />
                  </svg>
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
                  href="mailto:AIHSsupport@aihs.com"
                  className="text-gray-300 hover:underline"
                >
                  AIHSsupport@aihs.com
                </a>
              </p>
              <p className="mb-1 text-sm">
                <span className="font-semibold text-[#cfc4c4]">Phone:</span>{" "}
                +1 (123) 456-7890
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
