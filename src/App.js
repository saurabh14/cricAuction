import PlayerCard from "./components/auctionPage/PlayerCard";
import playerData from "./data/playerData.json";
import AuctionBidding from "./components/auctionPage/auctionBidding";
import { useState } from "react";
import "./assets/style/auctionPage.scss"; 



function App() {
  const [searchId, setSearchId] = useState("");
  const handleSearch = (e) => {
    setSearchId(e.target.value); // Update state with the input value
  };
  const filteredPlayer = playerData.find((player) => player.id === parseInt(searchId));


  return  (
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
          <p>No player found with this ID.</p> 
        </div>
        
      )}

      <AuctionBidding />
    </div>
  );
}

export default App;
