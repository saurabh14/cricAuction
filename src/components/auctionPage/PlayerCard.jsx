import PlayerInfo from "./PlayerInfo";

function PlayerCard({ player }){
    return(
        <div className="PlayerCard">
            <div className="player-number">PLAYER NO. {player.id}</div>
            <PlayerInfo player={player} />
        </div>
    )
}

export default PlayerCard;