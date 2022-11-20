import React from "react";
import LeaderboardsIcon from "./icons/LeaderboardsIcon";
import NavigationTabLink from "./NavigationTabLink";
import ThreadIcon from "./icons/ThreadIcon";

function NavigationTab() {
  return (
    <div className="flex justify-evenly items-center py-2">
      <NavigationTabLink path="/" pathName="Threads">
        <ThreadIcon />
      </NavigationTabLink>

      <NavigationTabLink path="/leaderboards" pathName="Leaderboards">
        <LeaderboardsIcon />
      </NavigationTabLink>
    </div>
  );
}

export default NavigationTab;
