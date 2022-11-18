import React from "react";
import ThreadCard from "./ThreadCard";

function ThreadList() {
  return (
    <div className="mt-10 [&>div:first-child]:border-t [&>div:first-child]:border-t-vampire-bite">
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
      <ThreadCard />
    </div>
  );
}

export default ThreadList;
