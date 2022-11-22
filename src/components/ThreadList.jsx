import React from "react";
import PropTypes from "prop-types";
import ThreadCard from "./ThreadCard";

function ThreadList({ threads }) {
  return (
    <div className="mt-10 md:w-3/5 max-w-[1000px] mx-auto bg-navy-blazer">
      {threads.length > 0 ? (
        threads.map((thread) => <ThreadCard key={thread.id} {...thread} />)
      ) : (
        <h2 className="text-center text-3xl py-10 text-vampire-bite">
          No Threads
        </h2>
      )}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadList;
