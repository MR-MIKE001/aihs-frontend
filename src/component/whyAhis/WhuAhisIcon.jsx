import React from "react";

function WhyAhisIcon({ icon }) {
  switch (icon) {
    case "access":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      );

    case "networking":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM12 12a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM15.375 12a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12c0 8.284-7.716 15-17.25 15S-3 20.284-3 12a17.25 17.25 0 0134.5 0z"
          />
        </svg>
      );

    case "insights":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 012-2h6M9 10a2 2 0 012-2h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 010 1.414l-3.414 3.414a1 1 0 01-.707.293H11a2 2 0 01-2-2v-6a2 2 0 012-2h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 010 1.414l-3.414 3.414a1 1 0 01-.707.293H11a2 2 0 01-2-2v-6z"
          />
        </svg>
      );

    case "exposure":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default WhyAhisIcon;