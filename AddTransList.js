import react,  { useState ,useContext} from 'react'
import styles from './Styles.module.css'
import { GlobalContex } from './contex/GlobalState'



export default function AddTransList(){
   
   const [item,setItem]= useState('')
   const [cost, setCost]= useState(0)
   const {AddTransaction }= useContext(GlobalContex);
    


    return(
        <div>

                {/* item container */}
                <div className={styles.itemcont}>
                        <h2 style={{textTransform: 'capitalize',margin:'30px 0px 0px -180px',fontSize: 'x-large'}}>Add new Expense</h2><hr style={{magin:'0 auto',width:'74%'}}/>
                     
                        
                        <input placeholder="enter Text" 
                            maxLength={20}
                        style={
                            {width:'300px',
                            margin:'2px 0px 0px -90px',
                            fontSize:'larger'}} 
                            value={item}
                            onChange={(e)=>setItem(e.target.value)}></input><br/><br/>


                        <input placeholder="cost of item"
                        style={
                            {width:'300px',
                            margin:'2px 0px 0px -90px',
                            fontSize:'larger'
                        }} 
                            maxLength='7'
                            
                            value={cost}
                            onChange={(e) => setCost(e.target.value.replace(/\D/g,""))}></input><br/><br/>
                        <button style={
                            {width:'300px',
                            // margin:'2px 0px 0px -90px',
                            margin:'0 auto',
                            height:'40px',
                            backgroundColor:'purple',
                            color:'whitesmoke',
                            fontSize:'large'}} onClick={AddTransaction}>Add Expense</button>

                    </div>

        </div>
    )
}