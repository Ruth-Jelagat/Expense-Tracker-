function ExpenseTable({ expenses, onDelete }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount ($)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button className="delete-btn" onClick={() => onDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              No expenses found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
