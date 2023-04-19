import { useEffect, useState } from "react"
import TransActionComponent from './TransActionComponent'
import OverViewComponent from './OverViewComponent'

export default function ExpenseApp() {
    const [expense,setExpense] = useState(0)
    const [income, setIncome] = useState(0)
    const [transActions, setTransActions] = useState([])
    const addTransaction = (formValues) => {
      setTransActions([...transActions, {...formValues, id: Date.now}])
    }

    useEffect(()=>{
      let exp = 0
      let inc = 0
      transActions.forEach((t) => {
        t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount))
      })
      setExpense(exp)
      setIncome(inc)
    },[transActions])
    return (
    <section className="container">
      <OverViewComponent income={income} expense={expense} addTransaction={addTransaction}/>
      <TransActionComponent transActions={transActions}/>
    </section>
    )
}