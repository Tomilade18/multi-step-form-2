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
                    <div className="side-sum">
                        <p className="highlight">1</p>
                        <div className="sum-info">
                            <h4>Step 1</h4>
                           <p>YOUR INFO</p> 
                        </div>
                    </div>
                     <div className="side-sum">
                        <p className="highlight">2</p>
                        <div className="sum-info">
                            <h4>Step 2</h4>
                           <p>SELECT PLAN</p> 
                        </div>
                    </div>
                     <div className="side-sum">
                        <p className="highlight">3</p>
                        <div className="sum-info">
                            <h4>Step 3</h4>
                           <p>ADD-ONS</p> 
                        </div>
                    </div>
                     <div className="side-sum">
                        <p className="highlight">4</p>
                        <div className="sum-info">
                            <h4>Step 4</h4>
                           <p>SUMMARY</p> 
                        </div>
                    </div>
                    
                </div>
                <div className="activity-area">
                    <h1 className="page-titles">{formtitles[page]}</h1>
                    <div className="middle">{pageDisplay()}</div> 
                    <div className="bottom">
                        <button className="prev" type="button"
                        disabled = {page == 0}
                        onClick={() => {setPage((currPage) => currPage - 1)}}
                        style={{display: page == 0 ? "none": "inline-block" }}
                        >Go Back</button>
                        <button className="next" type="button"
                        disabled = {page == formtitles.length -1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1)}}
                        > Next Step</button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}