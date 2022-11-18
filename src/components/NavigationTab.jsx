import React from "react";
import LeaderboardsIcon from "./LeaderboardsIcon";
import NavigationTabLink from "./NavigationTabLink";
import ThreadIcon from "./ThreadIcon";

function NavigationTab() {
  return (
    <div className="flex justify-evenly items-center py-2">
      <NavigationTabLink pathName="Threads">
        <ThreadIcon />
      </NavigationTabLink>

      <NavigationTabLink pathName="Leaderboards">
        <LeaderboardsIcon />
      </NavigationTabLink>
    </div>
  );
}

export default NavigationTab;
