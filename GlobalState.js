import React,{createContext,useReducer} from "react";

//initial state
const initialState={
    transactions:[
        {id:1 , item: 'Cup' , cost: 100},
        {id:2 , item: 'book' , cost: 200},
        {id:3 , item: 'salary' , cost: 500},
        {id:4 , item:'wage'  , cost: 800},
        {id:5 , item: 'transport' , cost: -500},
        {id:6 , item:'gift'  , cost: 800}
    ]
}

//the reducer
        function reducer(state,action){
            switch(action.type){
                case 'Del_Trans':
                    return{
                        ...state,
                        transactions: state.transactions.filter(transaction => transaction.id !== action.target)
                    }
                case 'Add_Trans'   :
                    return{
                         ...state, 
                         transactions: [action.target, ...state.transactions]
                    } 
                 default:
                     return state;
                }
        }

//create Contex
export const GlobalContex= createContext(initialState);

// provider Component

export const GlobalProvider = ({children})=>{
        const [state,dispatch] = useReducer(reducer,initialState)
        
        // actions for deleting and adding
        function DeleteTransaction(transactions){
            dispatch({
                type:'Del_Trans',
                target: transactions
            })
        }

        function AddTransaction(transactions){
            dispatch({
                type:'Add_Trans',
                target:transactions
            })
        }


        return (<GlobalContex.Provider value={{
            transactions:state.transactions ,
            DeleteTransaction ,
            AddTransaction

        }}>

        </GlobalContex.Provider>)
}