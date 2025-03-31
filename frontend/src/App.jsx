import { useState, useEffect } from "react";
import axios from "axios";

import { AppRoutes } from "./routes";

const API_URL = "http://localhost:8000/api/expenses/";

const App = () => {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		axios.get(API_URL).then((response) => setExpenses(response.data));
	}, []);

	console.log(expenses);

	return (
		<div>
			<AppRoutes />
		</div>
	);
};

export default App;
