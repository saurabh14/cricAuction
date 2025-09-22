import PlayerInfo from "./PlayerInfo";

function PlayerCard({ player }){
    return(
        <div className="PlayerCard">
            <div className="player-number">PLAYER NO. {player.id}</div>
            <div className="player-wrapper">
                <PlayerInfo player={player} />
            </div>
           
        </div>
    )
}

export default PlayerCard;