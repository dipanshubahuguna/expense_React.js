import { useState } from 'react';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
// import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_DATA = [
  {
    id: 0,
    date: new Date(2020, 7, 14),
    title: 'Car Insurance',
    amount: '100.00'
  },
  {
    id: 1,
    date: new Date(2021, 7, 21),
    title: 'TV purchase',
    amount: '10000.00'
  },
  {
    id: 2,
    date: new Date(2021, 10, 11),
    title: 'Books',
    amount: '2100.00'
  },
  {
    id: 3,
    date: new Date(2021, 8, 1),
    title: 'Mobile', 
    amount: '2200.00'
  },
]
const App = () => {
  
  const [expenses,setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) =>{
      setExpenses((prevExpenses) => {
          return [expense,...prevExpenses]
      })
  }
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;