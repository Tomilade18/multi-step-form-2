import { useState } from "react"
import PersonalInfo from "./step1"

export default function Form() {

    const [page, setPage] = useState(0)
    const formtitles = ['Personal Info', 'Select your plan', 'Pick add-ons', 'Finishing up']

    function pageDisplay(){
        if (page == 0){
            return <PersonalInfo/>
        }
    }

    return (
        <div className="main">
            <div className="sidebar"></div>
            <div className="activity-area">
                <div className="header"></div>
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
    )
}