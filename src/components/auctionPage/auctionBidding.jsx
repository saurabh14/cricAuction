import { useState } from "react";
function AuctionBidding(){
    const [isStarted, setIsStarted] = useState(false);
    const handleStart = () => {
        setIsStarted(true); // Show Sold and Unsold buttons
      };

    return(
        <div className="AuctionButtons">
            {!isStarted && (<div className="buttons" onClick={handleStart}> Start</div>)}
            
  
            {isStarted && (
            <>
                <div className="buttons">Sold</div>
                <div className="buttons">Unsold</div>
            </>
            )}
      </div>
    );
}

export default AuctionBidding;