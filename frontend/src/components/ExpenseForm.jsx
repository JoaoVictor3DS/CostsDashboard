import { useState } from "react";

export const ExpenseForm = ({ onAddExpense }) => {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !amount) return;

		onAddExpense({ name, amount: parseFloat(amount), category });
		setName("");
		setAmount("");
		setCategory("");
	};

	return (
		<div className="d-flex text-center align-content-center justify-content-center m-auto">
			<form className="form-group w-50 m-2" onSubmit={handleSubmit}>
				<input
					className="form-control m-2"
					type="text"
					placeholder="Descrição"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="form-control m-2"
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<select
					className="form-select m-2"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="Alimentação">Alimentação</option>
					<option value="Transporte">Transporte</option>
					<option value="Lazer">Lazer</option>
				</select>
				<button className="btn btn-primary" type="submit">
					Adicionar
				</button>
			</form>
		</div>
	);
};
