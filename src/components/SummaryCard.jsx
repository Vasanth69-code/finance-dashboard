const SummaryCard = ({ title, value, type }) => {
    const isIncome = type === "income";
    const isExpense = type === "expense";

    const valueColor = isIncome ? "text-emerald-400" : isExpense ? "text-rose-400" : "text-indigo-400";

    return (
        <div className="glass-panel glass-panel-hover p-6 w-full relative overflow-hidden group">
            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 ${isIncome ? 'bg-emerald-500' : isExpense ? 'bg-rose-500' : 'bg-indigo-500'}`}></div>

            <h3 className="text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 relative z-10">{title}</h3>
            <p className={`text-3xl md:text-4xl font-bold ${valueColor} relative z-10 tracking-tight`}>₹{value.toLocaleString()}</p>
        </div>
    );
};

export default SummaryCard;
