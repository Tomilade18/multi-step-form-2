import { useState } from "react"
import PersonalInfo from "./step1"
import SelectPlan from "./step2"
import AddOn from "./step3"
import "./main.css"
export default function Form() {

    const [page, setPage] = useState(0)
    const formtitles = ['Personal Info', 'Select your plan', 'Pick add-ons', 'Finishing up']

    function pageDisplay(){
        if (page == 0){
            return <PersonalInfo/>
        } else if (page === 1) {
            return <SelectPlan/>
        } else if (page === 2) {
            return <AddOn/>
        }
    }

    return (
        <div className="main">
            <div className="container">
                <div className="sidebar">
                    <p>Your </p>
                    <p>Your </p>
                    <p>Your </p>
                    <p>Your </p>
                </div>
                <div className="activity-area">
                    <h1>{formtitles[page]}</h1>
                    <div className="middle">{pageDisplay()}</div> 
                    <div className="bottom">
                        <button className="prev"
                        disabled = {page == 0}
                        onClick={() => {setPage((currPage) => currPage - 1)}}
                        style={{display: page == 0 ? "none": "inline-block" }}
                        >Go Back</button>
                        <button className="next"
                        disabled = {page == formtitles.length -1}
                        onClick={() => {setPage((currPage) => currPage + 1)}}
                        > Next Step</button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}