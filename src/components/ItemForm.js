import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newProduceName, setNewProduceName] = useState("")
  const [newProduceCategory, setNewProduceCategory] = useState("Produce")

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: uuid(),
      name: newProduceName,
      category: newProduceCategory,
    }
    onItemFormSubmit(formData);
  }

  function handleNameChange(event) {
    setNewProduceName(event.target.value)
  }

  function handleNewCategoryChange(event) {
    setNewProduceCategory(event.target.value)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newProduceName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newProduceCategory} onChange={handleNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
