import { useState } from "react";

function AuctionBidding({ playerFound, player, teams, setTeams }) {
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
                updatedTeams[teamIndex].playerCount += 1; // Increment player count
                updatedTeams[teamIndex].totalPrice += parseInt(price); // Add price to total
                if (rtmUsed) {
                    updatedTeams[teamIndex].RTMCard += 1;
                }
                

                setTeams(updatedTeams); // Update state with new team data
                setIsStarted(false); // Optionally reset the auction
            } else {
                alert("Invalid Team ID. Please try again.");
            }
        }
    };

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
                        <div className="buttons">Unsold</div>
                    </>
                )}
            </div>
        </>
    );
}

export default AuctionBidding;