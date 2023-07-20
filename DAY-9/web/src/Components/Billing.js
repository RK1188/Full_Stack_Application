import React, { useState } from 'react';
import Nav from './Navbar';
import './Billing.css';

const Counter = () => {
  const [items, setItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState();
  const [mrp, setMRP] = useState();
  // const [productID, setProductID] = useState('');
  // const [total, setTotal] = useState();
 

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  

  const handleMRPChange = (e) => {
    setMRP(e.target.value);
  };

  // const handleProductIDChange = (e) => {
  //   setProductID(e.target.value);
  // };
  

  const handleAddItem = () => {
    const newItem = {
      productName,
      quantity: parseInt(quantity),
      mrp: parseInt(mrp),
      // productID:parseInt(productID),
      total: parseInt(mrp*quantity),
      
    };

    setItems([...items, newItem]);
    setProductName('');
    setQuantity('');
    setMRP('');
    // setProductID('');
    // setTotal(0);
   
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let totalAmount = 0;

    items.forEach((item) => {
      totalAmount += item.total;
    });
    
    return totalAmount.toFixed(2);
  };
  
  return (
    <div>
    <Nav />
    <div className='Billing'>
    <h1 style={{ padding: '50px',color:"white" }}>Billing</h1>
    <div className='billingform' >
    
    <input
    type='text'
    placeholder='Product Name'
    value={productName}
    onChange={handleProductNameChange}
    />
    <input
    type='number'
    placeholder='Quantity'
    value={quantity}
    onChange={handleQuantityChange}
    />
        
        <input
        type='number'
        step='0.01'
        placeholder='MRP'
        value={mrp}
        onChange={handleMRPChange}
        />
        
        
        <button style={{backgroundColor:"red",borderRadius:"5px",marginLeft:"10px"}} onClick={handleAddItem}> Add Item</button>
        <div style={{marginLeft:"850px",fontSize:"20px",color:"white",marginTop:"-45px"}}>Total: Rs{calculateTotal()}</div>
          </div>
          <div className='billing2'>
          <table >
          <thead>
          <tr className='billing3'>
          <th >Product Name</th>
          <th>MRP</th>
          <th >Quantity</th>
          <th >Total</th>
          <th >Actions</th>
          </tr>
          </thead>
          <tbody className='billing4'>
          {items.map((item, index) => (
            <tr key={index} className='billing3' >
            <td style={{color:"white",background :"black"}} >{item.productName}</td>
                <td style={{color:"white",background :"black"}}>Rs {item.mrp}</td>
                <td style={{color:"white",background :"black"}}>{item.quantity}</td>
                <td style={{color:"white",background :"black"}}>Rs {item.total}</td>
                
                <td style={{color:"white",background :"black"}}>
                <button style={{background :"red",borderRadius:"5px"}}onClick={() => handleDeleteItem(index)}>Delete</button>
                </td>
                
                </tr>
                ))}
          </tbody>
        </table>
        </div>
        </div>
        </div>
  );
};

export default Counter;

