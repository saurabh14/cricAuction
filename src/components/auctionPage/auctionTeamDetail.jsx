

function AuctionTeamDetail({ player, team }) {
    return (
        <>
            <div className="AuctionTeam-Logo">{team.logo ? <img src={team.logo} alt={`${team.teamName} logo`} /> : "No Logo"}</div>
            <div className="AuctionTeam-Name">{team.teamName}</div>
            <div className="AuctionTeam-Players">{team.playerCount} Players</div>
            <div className="AuctionTeam-TotalSpend">Total Spend: {team.totalPrice}</div>
            <div className="AuctionTeam-Balance">Balance: {20000 - team.totalPrice}</div>
            {player && <div className="CurrentPlayer">Current Player: {player.name}</div>} {/* Display the current player */}
        </>
    );
}

export default AuctionTeamDetail;