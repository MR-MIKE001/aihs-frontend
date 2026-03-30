import React from "react";

function ForwhoIcon({ name, className = "w-6 h-6" }) {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className,
  };

  const icons = {
    exhibitors: (
      <svg {...commonProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21c-2.676 0-5.216-.584-7.499-1.882z"
        />
      </svg>
    ),
    sponsors: (
      <svg {...commonProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    attendees: (
      <svg {...commonProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 19.5M12 4.875c-2.625 0-4.875 2.25-4.875 4.875s2.25 4.875 4.875 4.875 4.875-2.25 4.875-4.875S14.625 4.875 12 4.875z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}

export default ForwhoIcon;