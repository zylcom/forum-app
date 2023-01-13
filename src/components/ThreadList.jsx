import React from "react";
import PropTypes from "prop-types";
import ThreadCard from "./ThreadCard";

function ThreadList({ threads }) {
  return (
    <div className="flex flex-col gap-y-3 p-3 mt-10 max-w-[720px] sm:min-w-[500px] md:min-w-[720px] lg:mt-0">
      {threads.length > 0 ? (
        threads.map((thread) => <ThreadCard key={thread.id} {...thread} />)
      ) : (
        <h2 className="text-center text-3xl py-10 text-vampire-bite">No Threads</h2>
      )}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadList;
