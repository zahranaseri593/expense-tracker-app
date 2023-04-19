import { useEffect, useState } from "react"

export default function TransActionComponent({transActions}){ 
    const [searchItem, setSearchItem] = useState('')
    const [filteredTnx,setFilteredTnx] = useState(transActions)

    const filterTransactions = (search)=>{
        if(!search){
            setFilteredTnx(transActions)
            return
        }
        const filtered= transActions.filter(t => t.desc.toLowelCase().include(search.toLowelCase()))
        setFilteredTnx(filtered)
    }

    const changeHandler =(e)=>{ 
        setSearchItem(e.target.value)
        filterTransactions(e.target.value)
    }

    useEffect(()=>{
        filterTransactions(searchItem)
    },[transActions])
return(
    <section>
        <input 
            type="text" 
            className="search" 
            value={searchItem} 
            onChange={changeHandler}
            placeholder="search transactions.."/>
        {filteredTnx.length ?
        filteredTnx.map(t => (
            <div key={t.id} className="transaction" style={{borderRightColor: t.type === "expense" && "red"}}>
                <span>{t.desc}</span>
                <span>{t.amount} $</span>
            </div>
        )): "no transactions.."}
    </section>
)
}