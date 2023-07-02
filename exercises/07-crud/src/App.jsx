import './App.css';

import { useState } from 'react';

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]); // Initialize with an empty array instead of an empty object
  const [itemName, setItemName] = useState(""); // State to track the current item name
  const [itemCost, setItemCost] = useState(""); // State to track the current item cost
  const [itemNameError, setItemNameError] = useState("");
  const [itemCostError, setItemCostError] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    // Validation for the itemName field
    if (!itemName.trim()) {
      setItemNameError("Name is required");
    } else {
      setItemNameError("");
    }
    // Validation for the itemCost field
    if (!itemCost) {
      setItemCostError("Cost is required");
    } else if (parseFloat(itemCost) <= 0) {
      setItemCostError("Cost must be greater than zero");
    } else {
      setItemCostError("");
    }
    // Add the item to the list if both the name and cost are valid
    if (itemName.trim() && parseFloat(itemCost) > 0) {
      const newItem = {
        name: itemName,
        cost: parseFloat(itemCost),
      };
      setGroceryItems([...groceryItems, newItem]);
      setItemName("");
      setItemCost("");
    }
  };
  const deleteItem = (index) => {
    const updatedItems = [...groceryItems];
    updatedItems.splice(index, 1);
    setGroceryItems(updatedItems);
  };

  const clearList = () => {
    setGroceryItems([]);
  };

  const totalCost = groceryItems.reduce((total, item) => total + item.cost, 0); // Calculate total cost

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3">
          <div className="col">
            <input
              name="itemName"
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)} // Update the itemName state
            />
            {itemNameError && <p className="text-danger">{itemNameError}</p>}{" "}
            {/* Display the error message */}
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={itemCost}
              onChange={(e) => setItemCost(e.target.value)} // Update the itemCost state
            />
            {itemCostError && <p className="text-danger">{itemCostError}</p>}{" "}
            {/* Display the error message */}
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success" onClick={addItem}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
            {groceryItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.cost.toFixed(2)}</td>{" "}
                {/* Display the cost with two decimal places */}
                <td>
                  <button
                    aria-label="Delete"
                    title="Delete"
                    onClick={() => deleteItem(index)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost:${totalCost.toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
