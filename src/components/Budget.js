import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let inputBudget = event.target.value;

        if(inputBudget > 20000) {
            alert("The budget cannot be greater than 20000");
            setNewBudget(newBudget);
            return;
        }

        if (inputBudget < totalExpenses) {
            alert("The budget value cannot be lower than the total expenses");
            setNewBudget(newBudget);
            return;
        }

        setNewBudget(inputBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;