import { useState } from "react"
import TransActionForm from './TransActionForm'

export default function OverViewComponent({income, expense, addTransaction}){
    const [isShow,setIsShow] = useState(false)
    
    return (   
    <>
        <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button onClick={()=> setIsShow(prev => !prev)} className={`btn ${isShow && "cancel"}`}>{isShow? "cancel":"Add"}</button>
      </div> 
        {isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
        
        <div className="resultSection">
            <div className="expenseBox">Expense <span style={{color:"red"}}>{expense} $</span></div>
            <div className="expenseBox">Income <span>{income} $</span></div>
        </div> 
    
        
        
      
    </>)
}