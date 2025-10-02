
function PlayerInfo({ player }){
    // Calculate strike rate (runs per 100 balls)
    
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
                    <div className="stat-value">{player.strikeRate}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">6s</div>
                    <div className="stat-value">{player.sixes}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">4s</div>
                    <div className="stat-value">{player.fours}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Wickets</div>
                    <div className="stat-value">{player.wickets}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label">Bowling Economy</div>
                    <div className="stat-value">{player.economy}</div>
                </div>
            </div>
        </div>
            

        </>
    )
}

export default PlayerInfo;
