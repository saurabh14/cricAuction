
function PlayerInfo({ player }){
    return(
            <>
            <div className="PlayerCard-img"></div>
            <div className="PlayerCard-name">{player.name}</div>
            <div className="PlayerCard-info">
                <div className="PlayerCardInfo-matches">Matches: {player.matches}</div>
                <div className="PlayerCardInfo-runs">Runs: {player.runs}</div>
                <div className="PlayerCardInfo-wickets">Wickets: {player.wickets}</div>
                <div className="PlayerCardInfo-lastTeam">Last Team: {player.lastTeam}</div>
            </div>
            </>
    )
}

export default PlayerInfo;
