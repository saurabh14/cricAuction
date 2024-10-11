

function AuctionTeamDetail({ player, team }) {
    return (
        <>
            <div className="AuctionTeam-Logo">{team.logo ? <img src={team.logo} alt={`${team.teamName} logo`} /> : "No Logo"}</div>
            <div className="AuctionTeam-Name">{team.teamName}</div>
            <div className="AuctionTeam-Players">{team.playerCount} Players</div>
            <div className="AuctionTeam-TotalSpend">Total Spend: {team.totalPrice}</div>
            <div className="AuctionTeam-Balance">Balance: {20000 - team.totalPrice}</div>
            <div className="AuctionTeam-RTMUsed">RTM Available: {2 - team.RTMCard }</div>
            
        </>
    );
}

export default AuctionTeamDetail;