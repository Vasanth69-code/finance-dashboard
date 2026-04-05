import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
    const { transactions, search, setSearch, role, setTransactions } = useContext(AppContext);

    const filtered = transactions.filter(t =>
        t.category.toLowerCase().includes(search.toLowerCase())
    );

    const deleteTx = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <div className="glass-panel p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                <h2 className="text-xl font-bold text-white mb-4 md:mb-0">Recent Transactions</h2>
                <div className="relative">
                    <input
                        placeholder="Search category..."
                        className="bg-slate-800/80 border border-slate-700/80 text-slate-200 placeholder-slate-500 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-full md:w-64 transition-all"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <svg className="w-5 h-5 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead>
                        <tr className="text-slate-400 text-sm border-b border-slate-700/50 uppercase tracking-wider">
                            <th className="p-3 font-medium">Date</th>
                            <th className="p-3 font-medium">Amount</th>
                            <th className="p-3 font-medium">Category</th>
                            <th className="p-3 font-medium">Type</th>
                            {role === "admin" && <th className="p-3 font-medium text-right">Action</th>}
                        </tr>
                    </thead>
                    <tbody className="text-slate-300">
                        {filtered.length > 0 ? (
                            filtered.map(t => (
                                <tr key={t.id} className="border-b border-slate-700/30 hover:bg-slate-800/40 transition-colors">
                                    <td className="p-4">{t.date}</td>
                                    <td className={`p-4 font-semibold ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                        {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600/30">
                                            {t.category}
                                        </span>
                                    </td>
                                    <td className="p-4 capitalize">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${t.type === 'income' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>{t.type}</span>
                                    </td>
                                    {role === "admin" && (
                                        <td className="p-4 text-right">
                                            <button
                                                onClick={() => deleteTx(t.id)}
                                                className="bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-rose-500/20 hover:border-rose-500"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-8 text-slate-500">
                                    No transactions found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;
