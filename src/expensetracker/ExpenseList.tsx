export interface Expense {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Prop) => {
  if (expenses.length === 0) return <p className="text-danger">Add Expenses</p>;
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.description}</td>

                <td>£{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(expense.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr key={"total"}>
              <td
                colSpan={2}
                style={{ textAlign: "center", fontWeight: "bolder" }}
              >
                Total
              </td>
              <td style={{ fontWeight: "bolder" }}>
                £
                {expenses
                  .reduce(
                    (acc, expense) => acc + Number(expense.amount) || 0,
                    0
                  )
                  .toFixed(2)}
              </td>
              <td colSpan={2}></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
