export default function AddOn() {
    return (
        <div>
            <p>Add-ons help enhance your gaming experience</p>
            <div className="check-op">
                <input type="checkbox" className="check-box"/>
                <div className="check-details">
                    <div>
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+$1/mo</p>
                </div>
            </div>
             <div className="check-op">
                <input type="checkbox" className="check-box" />
                <div className="check-details">
                    <div>
                        <h3>Larger storage</h3>
                        <p>Extra 1TB of cloud save </p>
                    </div>
                    <p>+$2/mo</p>
                </div>
            </div>
             <div className="check-op">
                <input type="checkbox" className="check-box" />
                <div className="check-details">
                    <div>
                        <h3>Customizable Profile</h3>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p>+$2/mo</p>
                </div>
            </div>
        </div>
    )
}