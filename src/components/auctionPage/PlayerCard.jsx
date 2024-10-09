import PlayerInfo from "./PlayerInfo";


function PlayerCard({ player }){
    return(
        <div className="PlayerCard">
            <PlayerInfo player={player}  />
        </div>
    )
}

export default PlayerCard;