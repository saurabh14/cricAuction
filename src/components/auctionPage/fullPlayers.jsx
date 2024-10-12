import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function FullPlayers({players}){
    const [visible, setVisible] = useState(false);
    return (
        <>
        <div className="playerListwrapper-card">
             {players.filter(player => player.finalPrice === 0).map((player) => (
                <div key={player.id} className="PlayerListCard">
                    <div className="playerName">{player.name}</div>
                    <div className="playerAttributes">{player.playerAttributes}</div>
                    <div className={`RatingContainer star${player.stars}`} >
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            ))}
        </div>
        

        <Button label="Unsold Players" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        <Dialog header="Unsold Players" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>                  
                    <div className="fullSquad-List">
                    {
                        (players.filter(player => player.finalPrice === -1).length === 0) ? (
                            <div className='NoPlayerSelected'>No Players Unsold</div>                           
                        ) : (                           
                            players.filter(player => player.finalPrice === -1).map((player) => (
                                    <div className="fullSquad-playerlist">
                                        <div>{player.name}</div>
                                        <div>{player.playerAttributes}</div>
                                        <div>{player.basePrice}</div>
                                        
                                    </div>
                                ))                           
                        )}

                    </div>
        </Dialog>
        </>
        
    )
}

export default FullPlayers;