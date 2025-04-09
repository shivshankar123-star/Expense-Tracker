interface Prop {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Prop) => {
  return (
    <>
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value={"All Categories"}>All Categories</option>
        <option value={"Entertainment"}>Entertainment</option>
        <option value={"Groceries"}>Groceries</option>
        <option value={"Healthcare / Insurance"}>Healthcare / Insurance</option>
        <option value={"Savings / Investments"}>Savings / Investments</option>
        <option value={"Transportation"}>Transportation</option>
        <option value={"Utilities"}>Utilities</option>
      </select>
    </>
  );
};

export default ExpenseFilter;
