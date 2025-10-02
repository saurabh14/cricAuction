import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function FullPlayers({players, teams, setPlayers, setTeams, onMarqueePlayerSelect}){
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
        <Dialog header={`Marquee Set ${selectedMarqueeSet} Players`} visible={marqueeVisible} style={{ width: '90vw' }} onHide={() => {if (!marqueeVisible) return; setMarqueeVisible(false); }}>
            <div className="marquee-players-container">
                {selectedMarqueeSet && marqueeSets[selectedMarqueeSet].map((player) => (
                    <div key={player.id} className="marquee-player-card">
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
                        <div className="marquee-team-selection">
                            <div className="team-selection-label">Assign to Team:</div>
                            <select 
                                className="team-dropdown"
                                data-player-id={player.id}
                                defaultValue=""
                            >
                                <option value="">Select Team</option>
                                {teams && teams.map(team => (
                                    <option key={team.id} value={team.id}>
                                        {team.teamName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
            </div>
            <div className="marquee-dialog-actions">
                <Button
                    label="SOLD"
                    className="sold-all-btn"
                    onClick={() => {
                        if (selectedMarqueeSet && marqueeSets[selectedMarqueeSet]) {
                            const playersToSell = marqueeSets[selectedMarqueeSet];
                            let allTeamsSelected = true;
                            const assignments = [];
                            
                            // Check if all players have teams selected
                            playersToSell.forEach(player => {
                                const teamDropdown = document.querySelector(`select[data-player-id="${player.id}"]`);
                                const selectedTeamId = teamDropdown ? parseInt(teamDropdown.value) : null;
                                
                                if (!selectedTeamId) {
                                    allTeamsSelected = false;
                                } else {
                                    assignments.push({ player, teamId: selectedTeamId });
                                }
                            });
                            
                            if (!allTeamsSelected) {
                                alert('Please select teams for all players before selling!');
                                return;
                            }
                            
                            // Process all assignments in batch
                            const updatedPlayers = [...players];
                            const updatedTeams = [...teams];
                            
                            assignments.forEach(({ player, teamId }) => {
                                // Update player data
                                const playerIndex = updatedPlayers.findIndex(p => p.id === player.id);
                                if (playerIndex !== -1) {
                                    updatedPlayers[playerIndex] = {
                                        ...updatedPlayers[playerIndex],
                                        finalPrice: player.basePrice,
                                        selectedTeam: teamId
                                    };
                                }
                                
                                // Update team data
                                const teamIndex = updatedTeams.findIndex(t => t.id === teamId);
                                if (teamIndex !== -1) {
                                    updatedTeams[teamIndex] = {
                                        ...updatedTeams[teamIndex],
                                        playerCount: updatedTeams[teamIndex].playerCount + 1,
                                        totalPrice: updatedTeams[teamIndex].totalPrice + player.basePrice,
                                        selectedPlayer: [...updatedTeams[teamIndex].selectedPlayer, player.id]
                                    };
                                }
                            });
                            
                            // Update both states at once
                            setPlayers(updatedPlayers);
                            setTeams(updatedTeams);
                            
                            setMarqueeVisible(false);
                        }
                    }}
                />
            </div>
        </Dialog>
        </>
        
    )
}

export default FullPlayers;