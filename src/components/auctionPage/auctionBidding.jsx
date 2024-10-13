import { useState } from "react";

function AuctionBidding({ playerFound, player, teams, setTeams,setSearchId }) {
    const [isStarted, setIsStarted] = useState(false); // Auction started state

    const handleStart = () => {
        setIsStarted(true);
    };

    const handleSold = () => {
        const name = player.name; 
        const price = prompt("Enter the sold price:"); 
        const teamId = prompt("Enter team ID to assign player:");
        const rtmUsed = window.confirm("Has RTM been used?");

        if (name && price && teamId) {
            const teamIndex = teams.findIndex((team) => team.id === parseInt(teamId));

            if (teamIndex !== -1) {
                // Update team data
                const updatedTeams = [...teams];

                player.finalPrice = price;
                const currentAvailable = 20000 - updatedTeams[teamIndex].totalPrice ;
                if(parseInt(currentAvailable) - parseInt(price) > 0){
                    if (rtmUsed) {
                        updatedTeams[teamIndex].RTMCard += 1;
                    }
                    updatedTeams[teamIndex].playerCount += 1; // Increment player count
                    updatedTeams[teamIndex].totalPrice += parseInt(price); 
                    updatedTeams[teamIndex].selectedPlayer.push(player.id);
                    setTeams(updatedTeams); // Update state with new team data                
                }
                else{
                    alert("Exceeds total Purse");
                }
            
                
               
                //Reset Randomizer
                setIsStarted(false); // Optionally reset the auction
                setSearchId(''); 
                
            
            } else {
                alert("Invalid Team ID. Please try again.");
            }
        }
    };

    const handleUnsold =() =>{
        player.finalPrice = -1;
        setSearchId(''); 
    }

    return (
        <>
            <div className="AuctionButtons">
                {!isStarted && playerFound && (
                    <div className="buttons" onClick={handleStart}>
                        Start
                    </div>
                )}

                {isStarted && (
                    <>
                        <div className="buttons" onClick={handleSold}>
                            Sold
                        </div>
                        <div className="buttons" onClick={handleUnsold}>Unsold</div>
                    </>
                )}
            </div>
        </>
    );
}

export default AuctionBidding;