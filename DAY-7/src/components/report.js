import React, { useState } from 'react';
import './report.css';

const Report = () => {
  const [inventory, setInventory] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddItemClick = () => {
    if (name && quantity) {
      const newItem = {
        name: name,
        quantity: parseInt(quantity),
      };
      setInventory([...inventory, newItem]);
      setName('');
      setQuantity('');
    }
  };

  const handleRemoveItemClick = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
  };

  return (
    <div className="App">
      <h1>Grocery Inventory Management</h1>
      <div className="inventory-list">
        <h2>Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItemClick(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-item">
          <h3>Add Item</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleAddItemClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Report;
