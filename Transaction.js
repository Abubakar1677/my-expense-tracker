import React,{useContext} from 'react'
import styles from './Styles.module.css'
import { GlobalContex } from './contex/GlobalState';


export default function Transaction({transaction}){
      const sign = transaction.cost < 0 ? '-' : '+';
      const {DeleteTransaction }= useContext(GlobalContex);
      
    return(
        <li className={transaction.cost  < 0 ? styles.expListOne : styles.expListTwo} >{transaction.item}
            <span style={{margin:'7px 45px 15px 0px',backgroundColor:'blue',width:'70px',borderRadius:'10px',color:'whitesmoke',fontWeight:'bold'}}>{sign}${ Math.abs(transaction.cost)}</span>
            <button  onClick={()=> deleteTransaction(transaction.id)} className={styles.delBtn}>X</button>
         </li>
    )
}