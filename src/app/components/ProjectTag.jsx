import React from "react";

//The ProjectTag component renders a styled button that toggles between selected and unselected states, allowing users to filter projects by category when clicked.

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold"
    : "text-black font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border-slate-600 hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;