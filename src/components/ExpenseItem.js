import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { BsFillPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><BsFillPlusCircleFill color="green" size={40}
                onClick={event=> increaseAllocation(props.name)}>
        </BsFillPlusCircleFill></td>
        <td><BsDashCircleFill color="red" size={40}
                onClick={event=> decreaseAllocation(props.name)}>
        </BsDashCircleFill></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;