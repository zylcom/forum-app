import React from "react";
import ThreadCard from "./ThreadCard";

function ThreadList() {
  return (
    <div className="mt-10 md:w-3/5 max-w-[1000px] mx-auto bg-navy-blazer">
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </div>
  );
}

export default ThreadList;
