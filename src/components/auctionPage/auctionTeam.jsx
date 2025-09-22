import AuctionTeamDetail from "./auctionTeamDetail";


function AuctionTeam({ player, teams }) {
    return (
        <div className="AuctionTeam-Container"> 
            {teams.map((team) => (
                <div key={team.id} className={`AuctionTeam ${team.class}`}>
                    <AuctionTeamDetail player={player} team={team} />
                </div>
            ))}
        </div>
    );
}


export default AuctionTeam;