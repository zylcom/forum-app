import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopUserItem from "./TopUserItem";
import { asyncReceiveLeaderboards } from "../states/leaderboards/action";

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
        <span>There no leaderboards</span>
      )}
    </div>
  );
}

export default TopUserList;
