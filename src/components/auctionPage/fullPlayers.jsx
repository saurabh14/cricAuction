import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function FullPlayers({players, onMarqueePlayerSelect}){
    const [visible, setVisible] = useState(false);
    const [marqueeVisible, setMarqueeVisible] = useState(false);
    const [selectedMarqueeSet, setSelectedMarqueeSet] = useState(null);
    
    // Helper function to generate star class name
    const getStarClassName = (stars) => {
        if (stars % 1 === 0) {
            return `star${Math.floor(stars)}`;
        } else {
            return `star${Math.floor(stars)}-5`;
        }
    };
    
    // Filter out Marquee players from regular list
    const regularPlayers = players.filter(player => !player.playerType.includes("Marquee") && player.finalPrice === 0);
    const marqueePlayers = players.filter(player => player.playerType.includes("Marquee"));
    
    // Group marquee players by set
    const marqueeSets = {
        1: marqueePlayers.filter(player => player.playerType === "Marquee 1"),
        2: marqueePlayers.filter(player => player.playerType === "Marquee 2"),
        3: marqueePlayers.filter(player => player.playerType === "Marquee Legend")
    };
    
    const handleMarqueeClick = (setNumber) => {
        setSelectedMarqueeSet(setNumber);
        setMarqueeVisible(true);
    };
    
    const handleMarqueePlayerSelect = (player) => {
        if (onMarqueePlayerSelect) {
            onMarqueePlayerSelect(player);
        }
    };
    
    return (
        <>
        <div className="playerListwrapper-card browserScrollStyle">
             {regularPlayers.map((player) => (
                <div key={player.id} className="PlayerListCard">
                    <div className="playerName">{player.name}</div>
                    <div className="playerAttributes">{player.playerAttributes}</div>
                    <div className={`RatingContainer ${getStarClassName(player.stars)}`} >
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Marquee Sets Buttons */}
        <div className="Marquee-Container">
            <div className="Marquee-List set1" onClick={() => handleMarqueeClick(1)}>
                <div className="marquee-set-title">Marquee - 1</div>
                <div className="marquee-set-count">{marqueeSets[1].length} Players</div>
            </div>
            <div className="Marquee-List set2" onClick={() => handleMarqueeClick(2)}>
                <div className="marquee-set-title">Marquee - 2</div>
                <div className="marquee-set-count">{marqueeSets[2].length} Players</div>
            </div>   
            <div className="Marquee-List set3" onClick={() => handleMarqueeClick(3)}>
                <div className="marquee-set-title">Marquee - Legends</div>
                <div className="marquee-set-count">{marqueeSets[3].length} Players</div>
            </div>   
        </div>

        <Button label="Unsold Players" className='unsoldBtn' icon="pi pi-external-link" onClick={() => setVisible(true)} />
        
        {/* Unsold Players Dialog */}
        <Dialog header="Unsold Players" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>                  
            <div className="fullSquad-List browserScrollStyle">
            {
                (players.filter(player => player.finalPrice === -1).length === 0) ? (
                    <div className='NoPlayerSelected'>No Players Unsold</div>                           
                ) : (                           
                    players.filter(player => player.finalPrice === -1).map((player) => (
                            <div key={player.id} className="fullSquad-playerlist">
                                <div>{player.name}</div>
                                <div>{player.playerAttributes}</div>
                                <div>{player.basePrice}</div>
                            </div>
                        ))                           
                )}
            </div>
        </Dialog>
        
        {/* Marquee Players Dialog */}
        <Dialog header={`Marquee Set ${selectedMarqueeSet} Players`} visible={marqueeVisible} style={{ width: '90vw', maxWidth: '1200px' }} onHide={() => {if (!marqueeVisible) return; setMarqueeVisible(false); }}>
            <div className="marquee-players-container">
                {selectedMarqueeSet && marqueeSets[selectedMarqueeSet].map((player) => (
                    <div 
                        key={player.id} 
                        className="marquee-player-card"
                        onClick={() => {
                            handleMarqueePlayerSelect(player);
                            setMarqueeVisible(false);
                        }}
                    >
                        <div className="marquee-player-image">
                            <div className="player-photo-placeholder">
                                <div className="player-initial">{player.name.split(' ').map(n => n[0]).join('')}</div>
                            </div>
                        </div>
                        <div className="marquee-player-name">{player.name}</div>
                        <div className="marquee-player-role">{player.playerAttributes}</div>
                        <div className="marquee-player-stats">
                            <div className="stats-header">VCL STATS</div>
                            <div className="stats-grid">
                                <div className="stat-row">
                                    <span className="stat-label">Matches:</span>
                                    <span className="stat-value">{player.matches}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Runs:</span>
                                    <span className="stat-value">{player.runs}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Strike Rate:</span>
                                    <span className="stat-value">{player.strikeRate}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">6s:</span>
                                    <span className="stat-value">{player.sixes}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">4s:</span>
                                    <span className="stat-value">{player.fours}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Wickets:</span>
                                    <span className="stat-value">{player.wickets}</span>
                                </div>
                                <div className="stat-row">
                                    <span className="stat-label">Economy:</span>
                                    <span className="stat-value">{player.economy}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Dialog>
        </>
        
    )
}

export default FullPlayers;