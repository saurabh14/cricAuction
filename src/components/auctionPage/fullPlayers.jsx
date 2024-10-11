function FullPlayers({players}){
    return (
        <div className="playerListwrapper-card">
             {players.map((player) => (
                <div key={player.id} className="PlayerListCard">
                    <div className="playerName">{player.name}</div>
                    <div className="playerAttributes">{player.playerAttributes}</div>
                    <div className={`RatingContainer star${player.stars}`} >
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FullPlayers;