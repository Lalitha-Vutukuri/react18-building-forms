import categories from "./categories";
interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectedCategory(e.target.value)}
    >
      <option value="">ALL Category</option>
      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
