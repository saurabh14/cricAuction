import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function AuctionTeamDetail({ player, team }) {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <div className="AuctionTeam-Logo"></div>
        <div className="AuctionTeam-Details">
            <div className="AuctionTeam-Name">{team.teamName}</div>
                <div className="team-stat">
                    <span className="stat-label">Players</span>
                    <span className="stat-value">{team.playerCount}</span>
                </div>
                <div className="team-stat">
                    <span className="stat-label">Total Spend</span>
                    <span className="stat-value">₹{team.totalPrice}</span>
                </div>
                <div className="team-stat">
                    <span className="stat-label">Balance</span>
                    <span className="stat-value">₹{20000 - team.totalPrice}</span>
                </div>
                <div className="team-stat">
                    <span className="stat-label">RTM Available</span>
                    <span className="stat-value">{2 - team.RTMCard}</span>
                </div>

                {/* Full Squad */}
                <Button label="Full Squad" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                <Dialog header={team.teamName} visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    
                    
                    <div className="fullSquad-List browserScrollStyle">
                    {
                        (team.selectedPlayer.length === 0) ? (
                            <div className='NoPlayerSelected'>No Players bought yet</div>                           
                        ) : (                           
                                player.filter(p => team.selectedPlayer.includes(p.id))
                                .map(selectedPlayer => (
                                    <div className="fullSquad-playerlist" key={selectedPlayer.id}>
                                        <div>{selectedPlayer.name}</div>
                                        <div>{selectedPlayer.playerAttributes}</div>
                                        <div>{selectedPlayer.finalPrice}</div>
                                        
                                    </div>
                                ))                           
                        )}

                    </div>

                    <div className="fullSquad-teamInfo">
                        <div className='fullSquad-infowrapper'>
                            <div className='fullSquad-title'>Players Bought:</div>
                            <div className='fullSquad-details'>{team.playerCount}</div>
                        </div>
                        <div className='fullSquad-infowrapper'>
                            <div className='fullSquad-title'>Total Money Spent:</div>
                            <div className='fullSquad-details'>₹{team.totalPrice}</div>
                        </div>
                        <div className='fullSquad-infowrapper'>
                            <div className='fullSquad-title'>Money Remaining:</div>
                            <div className='fullSquad-details'>₹{20000 - team.totalPrice}</div>
                        </div>
                        <div className='fullSquad-infowrapper'>
                            <div className='fullSquad-title'>RTM Available:</div>
                            <div className='fullSquad-details'>{2 - team.RTMCard}</div>
                        </div>                     
                    </div>
                </Dialog>

               
               
        </div>
            
            

        </>
    );
}

export default AuctionTeamDetail;