import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasePage } from "./pages/BasePage";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home";
import { ExpenseChart } from "./components/ExpenseChart";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BasePage />}>
					<Route index element={<Home />}></Route>
					<Route path="/chart" element={<ExpenseChart />}></Route>
					<Route path="/form" element={<ExpenseForm />}></Route>
					<Route path="/list" element={<ExpenseList />}></Route>
					<Route path="*" element={<Page404 />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
