import React, { useState } from 'react';

const NewProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Product submitted:', { name, description, category, quantity, price: `$${price}` });
    alert('Product submitted!');
  };

  const handleCancel = () => {
    
    console.log('Product creation cancelled');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Product</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default NewProductForm;
