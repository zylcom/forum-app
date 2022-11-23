import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { postedAt } from "../utils";
import Avatar from "./Avatar";
import ThreadCardFooter from "./ThreadCardFooter";

function ThreadCard({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) {
  return (
    <div className="grid grid-cols-3 px-3 py-8 text-super-silver gap-y-5 border-b border-b-vampire-bite">
      <div
        className="col-span-1 flex flex-col items-center bg-red-0 px-3 relative order-2
        border-t pt-1 after:content[''] after:w-2 after:h-2 after:absolute after:bg-navy-blazer
        after:-top-[1px] after:-left-[1px] after:rounded-tl-md after:border-l after:border-t
        before:content[''] before:absolute before:w-[5px] before:h-[5px] before:-top-[1px]
        before:-left-[1px] before:border-space-explorer before:border-l-2 before:border-t-2"
      >
        <div className="flex flex-col items-center">
          <Avatar url={user.avatar} alt={user.name} />

          <span className="text-xs text-center font-light break-all mt-1">
            {user.name}
          </span>
        </div>

        <span className="text-[length:10px] font-light mt-2">
          {postedAt(createdAt)}
        </span>
      </div>

      <div className="col-span-2 bg-space-explorer p-2 rounded-b-md rounded-tl-md border-r order-1">
        <Link to={`/threads/${id}`}>
          <h3
            className="font-bold text-lg truncate hover:text-white"
            title={title}
          >
            {title}
          </h3>
        </Link>

        <div
          className="text-sm mt-3 overflow-hidden leading-5 min-h-[32px] max-h-[calc(3*16px*1.25)] relative
          before:content-[''] before:absolute before:h-[calc(16px*1.25)] before:w-full before:bottom-0
          before:pointer-events-none before:bg-gradient-to-t before:from-space-explorer"
        >
          {parse(body)}
        </div>
      </div>

      <div className="flex gap-1 flex-wrap col-span-3 order-3">
        <span className="bg-deepest-water/50 rounded p-1 text-xs">
          #{category}
        </span>
      </div>

      <div className="col-span-3 flex w-full order-4 border rounded [&>button:nth-child(2)]:border-x">
        <ThreadCardFooter
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          threadId={id}
          totalComments={totalComments}
        />
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default ThreadCard;
