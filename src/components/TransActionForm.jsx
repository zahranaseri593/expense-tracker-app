import { useState } from "react"

export default function TransActionForm({addTransaction, setIsShow}){

    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: 0,
        desc: ""
    })

    const changeHandler = (e)=>{
        setFormValues({...formValues,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        addTransaction(formValues)
        setFormValues({
            type: "expense",
            amount: 0,
            desc: ""
        })
        setIsShow(false)
    }
    return (
        <form onSubmit={submitHandler} >
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc}/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}/>
            <div className="radioBox">
            <span><input 
                   type="radio" 
                   value="expense" 
                   name="type" 
                   id="expense"
                   onChange={changeHandler}
                   checked={formValues.type === "expense"} />
                <label htmlFor ="expense">Expense</label></span>
                <span><input 
                   type="radio" 
                   value="income" 
                   name="type" 
                   id="income"
                   onChange={changeHandler}
                   checked={formValues.type === "income"} />
                <label htmlFor="income">Income</label></span>
            </div>
            <button type="submit" className="btn primary">Add transaction</button>
        </form>
    )
}