export default function AddOn() {
    return (
        <div>
            <p>Add-ons help enhance your gaming experience</p>
            <div className="check-op">
                <input type="checkbox" id="check-box-1" />
                <label htmlFor="check-box-1">
                    <div className="check-info">
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+$1/mo</p>
                </label>
            </div>
             <div className="check-op">
                <input type="checkbox" id="check-box-2" />
                <label htmlFor="check-box-2">
                    <div className="check-info">
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+$1/mo</p>
                </label>
            </div>
             <div className="check-op">
                <input type="checkbox" id="check-box-3" />
                <label htmlFor="check-box-3">
                    <div className="check-info">
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+$1/mo</p>
                </label>
            </div>
        </div>
    )
}