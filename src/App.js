import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", location: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    if (!form.name || !form.quantity) return;
    setItems([...items, { ...form, quantity: parseInt(form.quantity, 10) }]);
    setForm({ name: "", quantity: "", location: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Inventory Management ERP</h1>
      <div style={{ marginBottom: 20 }}>
        <input
          name="name"
          placeholder="Item Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>No</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;