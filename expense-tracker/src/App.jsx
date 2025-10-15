import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", category: "Food", amount: 50 },
    { id: 2, description: "Bus fare", category: "Transport", amount: 20 },
    { id: 3, description: "Movie ticket", category: "Entertainment", amount: 15 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  function handleDelete(id) {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  }

  function handleSort(field) {
    const sorted = [...expenses].sort((a, b) =>
      a[field].toLowerCase().localeCompare(b[field].toLowerCase())
    );
    setExpenses(sorted);
  }

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar onSearch={setSearchTerm} />

      <div className="sort-buttons">
        <button onClick={() => handleSort("description")}>Sort by Description</button>
        <button onClick={() => handleSort("category")}>Sort by Category</button>
      </div>

      <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;

