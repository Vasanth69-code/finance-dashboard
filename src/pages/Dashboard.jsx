import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import Charts from "../components/Charts";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";

const Dashboard = () => {
    const { transactions } = useContext(AppContext);

    const income = transactions.filter(t => t.type === "income")
        .reduce((a, b) => a + b.amount, 0);

    const expense = transactions.filter(t => t.type === "expense")
        .reduce((a, b) => a + b.amount, 0);

    return (
        <div className="min-h-screen p-4 md:p-8 space-y-8 max-w-7xl mx-auto text-slate-100 selection:bg-indigo-500/30">
            <header className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 pb-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 via-purple-100 to-cyan-100">Finance</span> Tracker
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base font-light">Monitor your spending, income, and overall balance.</p>
                </div>
                <RoleSwitcher />
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard title="Income" value={income} type="income" />
                <SummaryCard title="Expense" value={expense} type="expense" />
                <SummaryCard title="Balance" value={income - expense} type="balance" />
            </div>

            <Charts transactions={transactions} />

            <Insights transactions={transactions} />

            <TransactionTable />

        </div>
    );
};

export default Dashboard;
