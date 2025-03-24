import { useState, useEffect } from "react";
import axios from "axios";

import { ExpenseChart, ExpenseForm, ExpenseList } from "./components"

const API_URL = "http://localhost:8000/api/expenses/";

const App = () => {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		axios.get(API_URL).then((response) => setExpenses(response.data));
	}, []);

	return (
		<div>
			{ExpenseChart()}
			{ExpenseForm()}
			{ExpenseList()}
		</div>
	);
};

export default App;