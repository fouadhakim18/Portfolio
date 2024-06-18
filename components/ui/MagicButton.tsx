"use client";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: String;
  icon?: React.ReactNode;
  position: String;
  handleClick?: () => void;
  otherClasses?: String;
}) => {
  return (
    // Button code
    <button className=" text-white font-bold " onClick={handleClick}>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center py-2  border-2 transition duration-500 hover:bg-transparent hover:text-primary  border-transparent hover:border-white bg-primary px-7 text-sm font-medium  gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
