import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
    const { role, setRole } = useContext(AppContext);

    return (
        <div className="flex justify-end p-2 rounded-xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 shadow-sm w-fit items-center">
            <span className="text-sm text-slate-400 mr-3 px-2 hidden sm:block">View mode:</span>
            <div className="relative">
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="appearance-none bg-slate-700/80 border border-slate-600 text-slate-200 rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-sm font-medium transition-colors"
                >
                    <option value="viewer">Viewer</option>
                    <option value="admin">Administrator</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default RoleSwitcher;
