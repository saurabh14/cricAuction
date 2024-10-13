import PlayerCard from "./components/auctionPage/PlayerCard";
import AuctionTeam from './components/auctionPage/auctionTeam';
import AuctionBidding from "./components/auctionPage/auctionBidding";
import FullPlayers from "./components/auctionPage/fullPlayers";

import playerData from "./data/playerData.json";
import teamData from './data/teamData.json';

import { useState } from "react";
import { Button } from 'primereact/button';

import "./assets/style/auctionPage.scss"; 
import "primereact/resources/themes/lara-light-cyan/theme.css";



        


        



function App() {
  const [searchId, setSearchId] = useState("");
  const filteredPlayer = playerData.find((player) => player.id === parseInt(searchId));
  const [players, setPlayers] = useState(playerData);
  const [teams, setTeams] = useState(teamData); // Team state
  const [isStarted, setIsStarted] = useState(false);
  const playerFound = !!filteredPlayer;

  const handleStart = () => {
      setIsStarted(true);
  };

  const randomizePlayerId = () => {
    const randomId = Math.floor(Math.random() * 80); 
    setSearchId(randomId);
  };

  return (
      <div className="App">
          <div className="SearchPlayer-Container">
              <Button label="Select Player to Auction" className='RandomPlayer' icon="pi pi-external-link" onClick={() => randomizePlayerId()} />
          </div>

          {filteredPlayer ? (
              <div className="playerCard-container">
                  <PlayerCard player={filteredPlayer} />
              </div>
          ) : (
              <div className="playerCard-container ">
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
              setSearchId={setSearchId} 
          />

          {/* Always display the AuctionTeam component with the relevant teams */}
          <AuctionTeam player={players} teams={teams} />
      </div>
  );
}


export default App;
