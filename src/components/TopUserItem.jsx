import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

function TopUserItem({ index, avatar, name, score }) {
  const { authUser } = useSelector((states) => states);
  return (
    <div className="bg-white/5 p-3 rounded-md flex items-center gap-x-1">
      <span className="text-3xl mr-2">{index + 1}.</span>

      <Avatar url={avatar} alt={name} />

      <span className="text-xl mx-2 truncate" title={name}>
        {name === authUser?.name ? `${name} (Anda)` : name}
      </span>

      <div
        className="bg-gradient-to-br from-light-shotoku-purple to-blue-genie
        rounded p-1 gap-y-1 px-3 flex flex-col items-center ml-auto"
      >
        <span className="text-sm">Score</span>
        <span className="text-xs">{score}</span>
      </div>
    </div>
  );
}

TopUserItem.propTypes = {
  index: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default TopUserItem;
