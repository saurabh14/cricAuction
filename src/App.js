import PlayerCard from "./components/auctionPage/PlayerCard";
import AuctionTeam from './components/auctionPage/auctionTeam';
import AuctionBidding from "./components/auctionPage/auctionBidding";
import FullPlayers from "./components/auctionPage/fullPlayers";

import playerData from "./data/playerData.json";
import teamData from './data/teamData.json';

import { useState } from "react";
import "./assets/style/auctionPage.scss"; 



function App() {
  const [searchId, setSearchId] = useState("");
  const filteredPlayer = playerData.find((player) => player.id === parseInt(searchId));
  const [players, setPlayers] = useState(playerData);
  const [teams, setTeams] = useState(teamData); // Team state
  const [isStarted, setIsStarted] = useState(false);
  const playerFound = !!filteredPlayer;

  const handleSearch = (e) => {
      setSearchId(e.target.value); 
  };

  const handleStart = () => {
      setIsStarted(true);
  };

  return (
      <div className="App">
          <div className="SearchPlayer-Container">
              <span>Player ID:</span>
              <input
                  type="text"
                  placeholder="Search by Player ID"
                  value={searchId}
                  onChange={handleSearch}
              />
          </div>

          {filteredPlayer ? (
              <div className="playerCard-container">
                  <PlayerCard player={filteredPlayer} />
              </div>
          ) : (
              <div className="playerCard-container">
                  {/* <p>No player found with this ID.</p> */}
                  <FullPlayers players={players} setPlayers={setPlayers} />
              </div>
          )}

          {/* Pass the teams and setTeams function to AuctionBidding */}
          <AuctionBidding 
              isStarted={isStarted} 
              playerFound={playerFound} 
              player={filteredPlayer} 
              onStart={handleStart} 
              teams={teams}
              setTeams={setTeams}
          />

          {/* Always display the AuctionTeam component with the relevant teams */}
          <AuctionTeam player={filteredPlayer} teams={teams} />
      </div>
  );
}


export default App;
