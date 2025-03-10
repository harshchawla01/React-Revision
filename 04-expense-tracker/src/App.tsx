import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Shopping", amount: 100, category: "Clothing" },
    { id: 2, description: "Grocery", amount: 50, category: "Food" },
    { id: 3, description: "Rent", amount: 500, category: "Home" },
  ]);

  const [selectedCategory, setselectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="mb-2">
        <ExpenseFilter
          // onSelectCategory={(category) => {
          //   if (!category) return setExpenses(expenses);
          //   setExpenses(
          //     expenses.filter((expense) => expense.category === category) // Pr isse tumhari state alter hojaegi. To agr tumne koi category select kari, to phli bar vo thik result dikhaegi, pr bad me jo bhi category select karoge, vo altered expense list pe filter lagaegi which won't fetch us the required result
          //     // That's why we need another state variable for filter.
          //   );
          // }}
          onSelectCategory={(category) => setselectedCategory(category)}
        />
      </div>
      <ExpenseList
        // expenses={expenses}
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
