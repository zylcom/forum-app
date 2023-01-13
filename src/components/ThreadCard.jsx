import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import ThreadCardFooter from "./ThreadCardFooter";
import { postedAt } from "../utils";

function ThreadCard({ id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, user }) {
  return (
    <div className="text-super-silver bg-navy-blazer p-3 rounded flex flex-col gap-y-3 md:px-6 md:py-10">
      <div>
        <Link to={`/threads/${id}`} className="hover:underline">
          <h3 className="font-bold text-lg leading-tight hover:text-white" title={title}>
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-x-2 mt-2">
          <Avatar url={user.avatar} alt={user.name} />
          <span className="text-xs text-center font-light break-all">{user.name}</span>

          <span className="text-[length:10px] font-light">&bull; {postedAt(createdAt)}</span>
        </div>
      </div>

      <div>
        <div
          className="text-sm overflow-hidden leading-5 min-h-[32px] max-h-[calc(3*16px*1.25)] relative
          before:content-[''] before:absolute before:h-[calc(16px*1.25)] before:w-full before:bottom-0
          before:pointer-events-none before:bg-gradient-to-t before:from-navy-blazer break-words"
        >
          {parse(body)}
        </div>

        <div className="flex gap-1 flex-wrap col-span-3 order-3 mt-3">
          <span className="bg-deepest-water/50 rounded p-1 text-xs break-all">#{category}</span>
        </div>
      </div>

      <div className="flex w-full gap-x-10">
        <ThreadCardFooter upVotesBy={upVotesBy} downVotesBy={downVotesBy} threadId={id} totalComments={totalComments} />
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
