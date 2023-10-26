import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const [currency, setCurrency] = useState('£ Pound');
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        setCurrency(val);
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val.charAt(0),
        })
    }
    
  return (
    <Dropdown style={{ fontSize: '20px' }} onSelect={changeCurrency}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ padding: '15px 30px', backgroundColor: '#84e384' }}>
        Currency ({currency})
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: '#84e384', border: '1px solid #228B22' }}>
            <Dropdown.Item eventKey="£ Pound">£ Pound</Dropdown.Item>
            <Dropdown.Item eventKey="$ Dollar">$ Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="€ Euro">€ Euro</Dropdown.Item>
            <Dropdown.Item eventKey="₹ Rupee">₹ Rupee</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
};

export default Currency;