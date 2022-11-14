import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseHandler = (enteredData) => {
    const newExpense = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
