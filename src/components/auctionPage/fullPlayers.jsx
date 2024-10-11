function FullPlayers({players}){
    return (
        <div>
             {players.map((player) => (
                <div key={player.id}>
                    <span>{player.name}</span>
                    <div className="RatingContainer"></div>
                </div>
            ))}
        </div>
    )
}

export default FullPlayers;