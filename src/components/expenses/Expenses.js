import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("");
  // const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
  const onSelectYearHandler = (year) => {
    setSelectedYear(year);
  };

  // useEffect(() => {
  //   if (selectedYear) {
  //     setFilteredExpenses(
  //       props.expenses.filter(
  //         (ex) => ex.date.getFullYear().toString() === selectedYear.toString()
  //       )
  //     );
  //   } else {
  //     setFilteredExpenses(props.expenses);
  //   }
  // }, [selectedYear]);
  const filteredExpenses = props.expenses.filter(
    (expense) =>
      expense.date.getFullYear().toString() === selectedYear.toString()
  );
  // let expensesContent = <p>No expenses found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent =
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter value={selectedYear} onSelectYear={onSelectYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
