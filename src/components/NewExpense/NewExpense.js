import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseHandler = (enteredData) => {
    const newExpense = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(newExpense);
  };
  function onAddExpenseClickHandler() {
    setShowForm(true);
  }

  const cancelHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseHandler}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={onAddExpenseClickHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
