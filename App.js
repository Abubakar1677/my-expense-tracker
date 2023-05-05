import './App.css';
import Header from './Header';
import IncomeExpense from './IncomeExpense';
import TransList from './TransList';
import styles from './Styles.module.css'
import { useState } from 'react';
import DropColBox from './DropColBox';
import Balance from './Balance';
import AddTransList from './AddTransList';

import { GlobalProvider } from './contex/GlobalState';

function App() {
  const [col, setCol]=useState({
    backgound: 'gold' 
  })
  
  return (
    // <GlobalProvider >
      <div style={{ backgroundColor:col.backgound }} className={styles.app}>
          <Header/>
          <Balance/>
          <IncomeExpense />
          <TransList />
          <AddTransList/>

          
          <DropColBox col={col} setCol ={setCol} />
      </div>   
    // {/* </GlobalProvider> */}
  );
}

export default App;
