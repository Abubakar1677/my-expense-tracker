
import react,{ useContext } from 'react'
import styles from './Styles.module.css'
import { GlobalContex } from './contex/GlobalState'


export default function IncomeExpense(){
    const {transactions} = useContext(GlobalContex) ;
  
    const  cost = transactions.map(transaction => transaction.cost);
   
    const income = (cost.filter(item => item > 0)) .reduce((acc,item) =>  (acc += item), 0).toFixed(2); 
    
    const expense = (cost.filter(item => item < 0)) .reduce((acc,item)=> (acc +=item,0)).toFixed(2)
    return(
       
        <div>
          
            {/* income & expense ............... */}
            <div className={styles.incExp}>
                    <div>
                        <h3 style={{color:'green'}}>income</h3>
                        <span style={{color:'rgb(94, 204, 61)', fontSize:'x-large'}}>${income}</span>
                    </div>
                    <div>
                    <h3 style={{color:'blue'}}>Expense</h3>
                    <span style={{color:'red', fontSize:'x-large'}}>${expense}</span>
                    </div>
             </div>
        </div>
    )
    
}