import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar } from "recharts";

const Charts = ({ transactions }) => {
    const income = transactions.filter(t => t.type === "income")
        .reduce((a, b) => a + b.amount, 0);

    const expense = transactions.filter(t => t.type === "expense")
        .reduce((a, b) => a + b.amount, 0);

    const pieData = [
        { name: "Income", value: income },
        { name: "Expense", value: expense },
    ];

    const expensesByCategoryData = Object.values(transactions.filter(t => t.type === "expense").reduce((acc, current) => {
        if (!acc[current.category]) acc[current.category] = { name: current.category, value: 0 };
        acc[current.category].value += current.amount;
        return acc;
    }, {}));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
                <h2 className="text-lg font-bold text-white mb-6">Balance Trend</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={transactions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="amount" stroke="#818cf8" strokeWidth={3} dot={{ r: 4, fill: "#818cf8", strokeWidth: 2, stroke: "#1e1b4b" }} activeDot={{ r: 6, strokeWidth: 0 }} />
                            <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value}`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', color: '#f1f5f9' }}
                                itemStyle={{ color: '#818cf8' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="glass-panel p-6">
                <h2 className="text-lg font-bold text-white mb-6">Income vs Expense</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={5}
                                stroke="none"
                            >
                                <Cell fill="#34d399" />
                                <Cell fill="#fb7185" />
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', color: '#f1f5f9' }}
                                formatter={(value) => `₹${value}`}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="glass-panel p-6 lg:col-span-2">
                <h2 className="text-lg font-bold text-white mb-6">Expenses by Category</h2>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={expensesByCategoryData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value}`} />
                            <Tooltip
                                cursor={{ fill: '#1e293b' }}
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem', color: '#f1f5f9' }}
                                formatter={(value) => `₹${value}`}
                            />
                            <Bar dataKey="value" fill="#fb7185" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Charts;
