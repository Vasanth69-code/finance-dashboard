# Finance Dashboard UI

A beautifully designed, highly interactive, and responsive finance dashboard built with **React**, **Vite**, and **Tailwind CSS**. This project was developed to demonstrate clear component structuring, modern frontend state management, and an emphasis on premium UI/UX aesthetics.

## 🚀 Live Preview & Features
The dashboard provides users with an intuitive interface to track and understand their financial activity.

### Key Features
- **Dashboard Overview:** Displays high-level summary cards (Income, Expenses, Balance).
- **Interactive Visualizations:** Includes multiple charts utilizing `recharts` for Balance Trends, Income vs Expense split, and Expenses by Category.
- **Transactions Section:** A responsive, interactive table with dynamic category search and styling based on transaction types.
- **Role-Based UI:** Simulates user roles. Switching to the **Administrator** role in the top right unlocks the ability to organically delete transactions from the table.
- **Smart Insights:** Dynamically calculates your highest spending category based on the underlying data.
- **Premium Aesthetics:** Features a meticulously crafted dark-theme built with raw CSS, glassmorphism UI elements (`backdrop-blur`), subtle micro-animations, and the modern `Outfit` font for a high-end feel. 

## 🏗 Overview of Approach
1. **Frontend Framework:** Built on **React** paired with **Vite** for incredibly fast compilation and hot-replacements.
2. **Styling:** Styled heavily utilizing **Tailwind v4** alongside a custom CSS layer to achieve complex glassmorphism (`glass-panel`) without cluttering the JSX payload. 
3. **State Management:** Handled natively using **React Context API** (`AppContext`) to seamlessly broadcast centralized state (like mock transactions, search filters, and selected roles) across heavily decoupled components.
4. **Data:** Hydrated directly from static memory mock data but is fully pre-formatted to dynamically recalculate charts and metrics via the Context API, bridging the gap for future API integration. 

## 🛠️ Setup Instructions

To run this project locally, follow these steps:

### Prerequisites
- Node.js installed on your machine (`v16.0.0` or higher recommended).

### Installation
1. Setup and clone the repository:
   ```bash
   git clone https://github.com/Vasanth69-code/finance-dashboard.git
   cd finance-dashboard
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your local browser and navigate to `http://localhost:5173/`!

## 🧩 Modularity and Scalability
The codebase breaks the dashboard into focused, reusable components (`SummaryCard`, `Charts`, `TransactionTable`, `RoleSwitcher`). These widgets are fully separated from the state context layer, allowing future developers to easily scale the dashboard into a full-scale multi-route application.
