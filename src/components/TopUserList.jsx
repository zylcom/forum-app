import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";
import TopUserItem from "./TopUserItem";

function TopUserList() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <div className="px-5 flex flex-col gap-y-2">
      {leaderboards.length > 0 ? (
        leaderboards.map((leaderboard, index) => (
          <TopUserItem
            key={leaderboard.user.id}
            index={index}
            avatar={leaderboard.user.avatar}
            name={leaderboard.user.name}
            score={leaderboard.score}
          />
        ))
      ) : (
        <p>No leaderboards</p>
      )}
    </div>
  );
}

export default TopUserList;
