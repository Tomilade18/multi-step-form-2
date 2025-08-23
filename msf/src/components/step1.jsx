import { useState } from "react"



export default function PersonalInfo () {
    return (
        <div>     
            <p>Please provide your name, email address, and phone number.</p>
            <div className="input-field">
                <label htmlFor="name">name</label>
                <input type="text" placeholder="John doe"/>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="freemeal@vazquez.com"/>
                <label htmlFor="number">number</label>
                <input type="text" placeholder="e.g +1 234 567 890"/>
            </div>
          
        </div>
    )
}