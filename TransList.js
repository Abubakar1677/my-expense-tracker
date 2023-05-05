import styles from './Styles.module.css'
import React , { useContext } from 'react'
import { GlobalContex } from './contex/GlobalState'
import Transaction from './Transaction'


export default function TransList(){
        const {transactions} = useContext(GlobalContex)

       
return(
   
   <div className={styles.histCont} >
              
                       <h2 style={{textTransform: 'uppercase',margin:'20px 0px 0px -300px',fontSize: 'x-large'}}>history</h2>
                       <input placeholder="Type to seach for an expense" style={{width:'300px',margin:'2px 0px 0px 40px',borderRadius:'5px'}} ></input><br/><br/>
                       <div >
                       
                            <ul className={styles.expArr}>
                               {transactions.map(transaction  =>(<Transaction key={transaction.id} transaction={transaction}/>))}
                                
                            </ul>
               
                      
                       </div>
            
   </div>
    )
}