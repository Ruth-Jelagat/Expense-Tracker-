import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.description || !formData.category || !formData.amount) {
      alert("Please fill out all fields!");
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
    };

    onAddExpense(newExpense);
    setFormData({ description: "", category: "", amount: "" });
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
