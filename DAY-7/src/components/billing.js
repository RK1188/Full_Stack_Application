import React, { useState } from 'react';
import Nav from './nav';
import './contact.css';

const Counter = () => {
  const [items, setItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState();
  const [mrp, setMRP] = useState();
  const [productID, setProductID] = useState('');
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

  const handleProductIDChange = (e) => {
    setProductID(e.target.value);
  };
  

  const handleAddItem = () => {
    const newItem = {
      productName,
      quantity: parseInt(quantity),
      mrp: parseInt(mrp),
      productID:parseInt(productID),
      total: parseInt(mrp*quantity),
      
    };

    setItems([...items, newItem]);
    setProductName('');
    setQuantity('');
    setMRP('');
    setProductID('');
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
    <div className='homeContainer'>
      <Nav />
      <h1 style={{ padding: '50px' }}>Billing Management</h1>
      <div>
      <input
        type='text'
        placeholder='Product ID'
        value={productID}
        onChange={handleProductIDChange}
      />
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
        
        
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className='container-1'>
        <table style={{ padding: '30px' }}>
          <thead>
            <tr>
            <th style={{ padding: '30px' }}>Product ID</th>
              <th style={{ padding: '30px' }}>Product Name</th>
              <th style={{ padding: '30px' }}>MRP</th>
              <th style={{ padding: '30px' }}>Quantity</th>
              <th style={{ padding: '30px' }}>Total</th>
              <th style={{ padding: '30px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
              <td>{item.productID}</td>
                <td>{item.productName}</td>
                <td>Rs {item.mrp}</td>
                <td>{item.quantity}</td>
                <td>Rs {item.total}</td>
                
                <td>
                  <button onClick={() => handleDeleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>Total: Rs{calculateTotal()}</div>
    </div>
  );
};

export default Counter;

