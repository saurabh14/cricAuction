function AuctionBidding({ playerFound, player, teams, setTeams, setSearchId, selectedTeam, currentBid, rtmUsed }) {

    const handleSold = () => {
        // Check if all required selections are made
        if (!selectedTeam) {
            alert("Please select a team first!");
            return;
        }
        
        if (!currentBid) {
            alert("Please select a bid price first!");
            return;
        }

        const teamIndex = teams.findIndex((team) => team.id === selectedTeam);

        if (teamIndex !== -1) {
            // Update team data
            const updatedTeams = [...teams];

            player.finalPrice = currentBid;
            const currentAvailable = 20000 - updatedTeams[teamIndex].totalPrice;
            
            if (parseInt(currentAvailable) - parseInt(currentBid) >= 0) {
                if (rtmUsed) {
                    updatedTeams[teamIndex].RTMCard += 1;
                }
                updatedTeams[teamIndex].playerCount += 1; // Increment player count
                updatedTeams[teamIndex].totalPrice += parseInt(currentBid); 
                updatedTeams[teamIndex].selectedPlayer.push(player.id);
                setTeams(updatedTeams); // Update state with new team data
                
                // Show success message
                alert(`Player ${player.name} sold to ${updatedTeams[teamIndex].teamName} for Rs. ${currentBid}${rtmUsed ? ' (RTM Used)' : ''}`);
                
                // Reset Randomizer
                setSearchId(''); 
            } else {
                alert("Exceeds total purse! Available: Rs. " + currentAvailable);
            }
        } else {
            alert("Invalid Team selection. Please try again.");
        }
    };

    const handleUnsold =() =>{
        player.finalPrice = -1;
        alert(`Player ${player.name} went unsold`);
        setSearchId(''); 
    }

    return (
        <>
            <div className="AuctionButtons">
                {playerFound && (
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