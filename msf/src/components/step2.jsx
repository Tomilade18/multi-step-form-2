import { useState } from "react"



export default function SelectPlan() {
    const [toggled, setToggled] = useState(false)

    return (
        <div>     
            <p>You have the option of monthly or yearly billing.</p>
            <div className="options-cont">
             <div className="option">
                <img className="icon" src="/images/icon-arcade.svg" alt="" />
                <h2>Arcade</h2>
                <p>$ 90/yr</p>
                <p>2 month free</p>
             </div>
             <div className="option">
                <img className="icon" src="/images/icon-advanced.svg" alt="" />
                <h2>Advanced</h2>
                <p>$ 120/yr</p>
                <p>2 month free</p>
             </div>
             <div className="option">
                <img className="icon" src="/images/icon-pro.svg" alt="" />
                <h2>Pro</h2>
                <p>$ 150/yr</p>
                <p>2 month free</p>
             </div>
            </div>
            <div className="toggle-cont">
                <p>Monthly</p>
                <div>
                    <button className={`toggle-btn ${toggled ? `toggled`: ""}`}
                    onClick={() => setToggled(!toggled)}>
                      <div className="thumb"></div>
                    </button>
                </div>
                <p>Yearly</p>
            </div>
          
        </div>
    )
}