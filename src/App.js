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

  const handleMarqueePlayerSelect = (player) => {
    // Set the selected Marquee player for auction
    setSearchId(player.id);
  };

  return (
      <div className="App">
          {/* Professional Header */}
          <div className="auction-header">
              <div className={`back-button ${filteredPlayer ? 'visible' : 'hidden'}`} onClick={() => setSearchId('')}>
                  <div className="back-arrow">←</div>
              </div>
              <div className="auction-title">
                  <h1>Village Cricket League</h1>
                  <div className="season-info">Season 10</div>
              </div>
              <div className="league-logo">
              </div>
          </div>

          {/* Main Auction Container */}
          <div className="auction-container">
              <div className="auction-left">
                  <div className="SearchPlayer-Container">
                      <Button label="Select Player to Auction" className='RandomPlayer' icon="pi pi-external-link" onClick={() => randomizePlayerId()} />
                  </div>

                  {filteredPlayer ? (
                      <div className="playerCard-container">
                          <PlayerCard player={filteredPlayer} />
                      </div>
                  ) : (
                      <div className="playerCard-container">
                          <FullPlayers 
                              players={players} 
                              setPlayers={setPlayers} 
                              onMarqueePlayerSelect={handleMarqueePlayerSelect}
                          />
                      </div>
                  )}

                  {/* Auction Controls */}
                  <AuctionBidding 
                      isStarted={isStarted} 
                      playerFound={playerFound} 
                      player={filteredPlayer} 
                      onStart={handleStart} 
                      teams={teams}
                      setTeams={setTeams}
                      setSearchId={setSearchId} 
                  />
              </div>

              {/* Team Dashboard */}
              <div className="auction-right">
                  <AuctionTeam player={players} teams={teams} />
              </div>
          </div>
      </div>
  );
}


export default App;
