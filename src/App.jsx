import './App.css'
import ExpenseApp from './components/ExpenseApp'

const App = () =>{
    return(
        <div className='App'>
            <header>
                <h2 style={{marginBottom:"15px"}}>Expense tracker</h2>
            </header>
            <ExpenseApp/>
        </div>
    )
}

export default App