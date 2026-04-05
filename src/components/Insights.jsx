const Insights = ({ transactions }) => {
    const categories = {};

    transactions.forEach(t => {
        if (t.type === "expense") {
            categories[t.category] = (categories[t.category] || 0) + t.amount;
        }
    });

    const highest = Object.keys(categories).reduce((a, b) =>
        categories[a] > categories[b] ? a : b, ""
    );

    return (
        <div className="glass-panel p-6 border-l-4 border-l-indigo-500">
            <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h2 className="text-xl font-bold text-white">Smart Insights</h2>
            </div>
            {highest ? (
                <p className="text-slate-300 mt-2">
                    Your highest spending category is <span className="font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">{highest}</span>. Consider setting a budget to manage your expenses!
                </p>
            ) : (
                <p className="text-slate-400 mt-2 italic">Not enough expense data to generate insights.</p>
            )}
        </div>
    );
};

export default Insights;
