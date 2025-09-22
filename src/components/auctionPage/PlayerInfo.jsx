
function PlayerInfo({ player }){
    // Calculate strike rate (runs per 100 balls)
    const strikeRate = player.matches > 0 ? ((player.runs / (player.matches * 30)) * 100).toFixed(2) : 0;
    
    // Calculate 4s and 6s (estimated)
    const fours = Math.floor(player.runs * 0.15);
    const sixes = Math.floor(player.runs * 0.05);
    
    return(
        <>
        <div className="PlayerCard-details-wrapper">                                  
                <div className="player-name-panel">
                    <div className="PlayerCard-name">{player.name}</div>
                </div>
                
                <div className="player-role-panel">
                    <div className="PlayerCard-role">{player.playerAttributes}</div>
                    <div className="PlayerCard-hand">
                        {player.playerAttributes === 'Batsman' ? '(Right Hand Batsman)' : 
                        player.playerAttributes === 'Bowler' ? '(Right Arm Bowler)' : 
                        '(Right Hand Allrounder)'}
                    </div>
                </div>
                
                <div className="base-price-panel">
                    <div className="price-value">Rs. {player.basePrice}</div>
                </div>
        </div>
        <div className="PlayerCard-img"></div>
        <div className="PlayerCard-info-wrapper">
            <div className="PlayerCard-info">
                <div className="stat-item">
                    <div className="stat-label">Matches</div>
                    <div className="stat-value">{player.matches}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Runs</div>
                    <div className="stat-value">{player.runs}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Strike Rate</div>
                    <div className="stat-value">{strikeRate}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">6s</div>
                    <div className="stat-value">{sixes}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">4s</div>
                    <div className="stat-value">{fours}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Wickets</div>
                    <div className="stat-value">{player.wickets}</div>
                </div>
            </div>
        </div>
            

        </>
    )
}

export default PlayerInfo;
