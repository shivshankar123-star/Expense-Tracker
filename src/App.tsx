import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useState } from "react";
import ExpenseList, { Expense } from "./expensetracker/ExpenseList";
import ExpenseFilter from "./expensetracker/ExpenseFilter";
import styles from "./App.module.css";
import ExpenseForm from "./expensetracker/ExpenseForm";
import { FieldValues } from "react-hook-form";
import ExpenseWeather from "./expensetracker/ExpenseWeather";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expenditure, setExpenditure] = useState<Expense[]>([]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const deleteExpense = (id: number) => {
    setExpenditure(expenditure.filter((expense) => expense.id !== id));
  };

  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");

  const updatedList =
    selectedCategory === "All Categories"
      ? expenditure
      : expenditure.filter((expense) => selectedCategory === expense.category);

  const filtered = (category: string) => {
    setSelectedCategory(category);
  };

  const mySubmit = (data: FieldValues) => {
    const newExpense = {
      id: expenditure.length + 1,
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    setExpenditure((prevExpendture) => [...prevExpendture, newExpense]);
  };

  return (
    <div className={darkMode ? styles.bgNight : styles.bgLight}>
      <div className="d-flex justify-content-between align-items-center">
        <div className={styles.logo}>ExpenseTracker</div>
        {!darkMode && (
          <div style={{ padding: 10 }}>
            <FaMoon size={30} onClick={toggleMode} />
            <span>Dark Mode</span>
          </div>
        )}
        {darkMode && (
          <div style={{ padding: 10 }}>
            <FiSun color="white" size={30} onClick={toggleMode} />{" "}
            <span style={{ color: "white" }}>Light Mode</span>
          </div>
        )}
      </div>
      <div className={styles.formStyle}>
        <ExpenseForm handleSubmission={mySubmit} />
        <ExpenseFilter onSelect={filtered} />
        <ExpenseList expenses={updatedList} onDelete={deleteExpense} />
        <div className={styles.weatherDisplay}>
          <ExpenseWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
