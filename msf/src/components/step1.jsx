import { useState } from "react"



export default function PersonalInfo () {
    return (
        <div>
            <h1></h1>
            <p></p>
            <div>
                <label htmlFor="name">name</label>
                <input type="text" />
                <label htmlFor="email">email</label>
                <input type="email" />
                <label htmlFor="number">number</label>
                <input type="number" />
            </div>
          
        </div>
    )
}