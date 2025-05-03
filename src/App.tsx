//import Form from "./Components/Form";
import { useState } from "react";
//import Form1 from "./Components/Form1";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";
import categories from "./Components/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;
  return (
    <div>
      {/*<Form />*/}
      {/* <Form1 /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(data) => setSelectedCategory(data)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpense(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
