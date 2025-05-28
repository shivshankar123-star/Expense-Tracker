import { useForm } from "react-hook-form";

interface FormData {
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface Prop {
  handleSubmission: (data: FormData) => void;
}

const ExpenseForm = ({ handleSubmission }: Prop) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    handleSubmission(data);
    reset();
  };

  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 mt-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            {...register("date", { required: true })}
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Date is required.</p>
          )}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description", { required: true, minLength: 3 })}
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Description is required.</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">Must be at least 3 characters.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="a" className="form-label">
            Amount
          </label>
          <input
            step={"any"}
            type="number"
            className="form-control"
            id="amount"
            {...register("amount", { required: true })}
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required.</p>
          )}
        </div>
        <div>
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            id="category"
            {...register("category", { required: true })}
          >
            <option value={""}>C a category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Groceries">Groceries</option>
            <option value={"Healthcare / Insurance"}>
              Healthcare / Insurance
            </option>
            <option value={"Savings / Investments"}>
              Savings / Investments
            </option>
            <option value={"Transportation"}>Transportation</option>
            <option value={"Utilities"}>Utilities</option>
          </select>
          {errors.category?.type === "required" && (
            <p className="text-danger">Category is required.</p>
          )}
        </div>
        <button id="submit-btn" type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
