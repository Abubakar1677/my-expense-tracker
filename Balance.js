import React,{useContext} from 'react';
import styles from './Styles.module.css';
import { GlobalContex } from './contex/GlobalState';
export default function Balance(){
  
    const {transactions} = useContext(GlobalContex) ;
   
    const costs = transactions.map(transaction => transaction.cost);
    const total = costs.reduce((acc,item) =>  (acc += item), 0).toFixed(2);
   
    return(
        <div>
              {/* balance statement */}   
              <div className={styles.bal}>
            <p>Your Balance :</p>
                <span className={styles.balAmt} >${total}</span>
             </div>
        </div>
    )
}