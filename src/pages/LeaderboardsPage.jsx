import React from "react";
import TopUserList from "../components/TopUserList";

function LeaderboardsPage() {
  return (
    <div className="text-white py-16 md:w-3/5 max-w-[1000px] mx-auto bg-navy-blazer">
      <h1 className="text-4xl font-bold py-3 px-2">Top User</h1>

      <TopUserList />
    </div>
  );
}

export default LeaderboardsPage;
