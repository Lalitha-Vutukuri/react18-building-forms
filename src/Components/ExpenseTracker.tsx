import { useForm } from "react-hook-form";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="form-control"
          {...register("description", { required: true, minlength: 3 })}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">
            Description Should be atleast 3 characters
          </p>
        )}
        {errors.description?.type === "minlength" && (
          <p className="text-danger">
            Description Should be atleast 3 characters
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input
          type="text"
          id="amount"
          className="form-control"
          {...register("amount", { required: true })}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">Amount is required</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          id="category"
          className="form-select"
          {...register("category", { required: true })}
        >
          <option selected></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">category is required</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseTracker;
