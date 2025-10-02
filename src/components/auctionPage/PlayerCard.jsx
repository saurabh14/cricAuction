import PlayerInfo from "./PlayerInfo";
import { Button } from 'primereact/button';

function PlayerCard({ player, teams, onTeamSelect, onRTMSelect, onPriceSelect, currentBid, selectedTeam, rtmUsed }){
    // Generate price options from base price to 2500
    const generatePriceOptions = () => {
        const prices = [];
        const basePrice = player.basePrice;
        
        // Add base price
        prices.push(basePrice);
        
        // Add increments of 100 from base price to 2000
        for (let price = basePrice + 100; price <= 2000; price += 100) {
            prices.push(price);
        }
        
        // Add 2250 and 2500
        prices.push(2250);
        
        return prices;
    };

    const priceOptions = generatePriceOptions();

    return(
        <div className="PlayerCard">
            <div className="player-number">PLAYER NO. {player.id}</div>
            <div className="player-wrapper">
                <PlayerInfo player={player} />
            </div>
            
            {/* Interactive Buttons Section */}
            <div className="player-interactive-buttons">
                {/* Team Selection Buttons */}
                <div className="team-selection-section">
                    <div className="section-title">Select Team</div>
                    <div className="team-buttons">
                        {teams.map(team => (
                            <Button
                                key={team.id}
                                label={team.teamName}
                                className={`team-button ${team.class} ${selectedTeam === team.id ? 'selected' : ''}`}
                                onClick={() => onTeamSelect && onTeamSelect(team.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* RTM Selection */}
                <div className="rtm-selection-section">
                    <div className="section-title">RTM Usage</div>
                    <Button
                        label={rtmUsed ? "RTM Used" : "Use RTM"}
                        className={`rtm-button ${rtmUsed ? 'used' : 'available'}`}
                        onClick={() => onRTMSelect && onRTMSelect(!rtmUsed)}
                        disabled={rtmUsed}
                    />
                </div>

                {/* Price Bidding Buttons */}
                <div className="price-selection-section">
                    <div className="section-title">Bid Price</div>
                    <div className="price-buttons">
                        {priceOptions.map(price => {
                            let specialClass = '';
                            if (price === 2000) {
                                specialClass = 'silver';
                            } else if (price === 2250) {
                                specialClass = 'golden';
                            }
                            
                            return (
                                <Button
                                    key={price}
                                    label={`Rs. ${price}`}
                                    className={`price-button ${specialClass} ${currentBid === price ? 'selected' : ''}`}
                                    onClick={() => onPriceSelect && onPriceSelect(price)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard;