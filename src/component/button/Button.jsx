import ButtonIcon from "./ButtonIcon";

function Button({ buttonText, buttonType }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3";

  if (buttonType === "primary") {
    return (
      <button
        className={`${baseClasses} bg-[#370cb9] text-white hover:bg-[#280f75]/80`}
      >
        {buttonText}
      </button>
    );
  }

  return (
    <button
      className={`${baseClasses} border border-[#370cb9] bg-white text-[#370cb9] hover:bg-white/80`}
    >
      <span className="flex items-center gap-2">
        <ButtonIcon buttonText={buttonText} />
        {buttonText}
      </span>
    </button>
  );
}

export default Button;
