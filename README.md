# Budget Tracker — Frontend

A React-based budget tracker interface for recording income and expenses, reviewing transactions, and visualising personal finances. This repository contains the **client application**; the Express API and MongoDB data layer live in a separate repository.

## Repositories

- **Frontend (this repository):** https://github.com/NischalBhatta/bt_client
- **Backend API:** https://github.com/NischalBhatta/bt_api

The frontend calls the backend at the URL configured by `VITE_ROOT_API`. For local development, run the API and frontend in separate terminals.

## Features

- Sign-up and login screens
- JWT-based authentication flow, with the access token kept in `localStorage`
- Protected dashboard and transaction pages
- Add income and expense transactions with a title, amount, and date
- View transactions, search by title, select records, and delete selected transactions
- Calculate the balance from the transactions returned by the API
- Dashboard KPIs and charts for balance, income, and expenses
- Rotating financial tips and quotes
- Toast notifications for user feedback
- Responsive layout using React Bootstrap

## Tech stack

- React 19 and Vite
- React Router for client-side navigation
- Axios for HTTP requests
- React Bootstrap and Bootstrap for layout and UI
- Chart.js, `react-chartjs-2`, and Recharts dependencies for data visualisation
- React Toastify for notifications
- React Icons

## Requirements

- Node.js and npm (use a Node.js release supported by the installed Vite version)
- Git
- The companion backend API running locally or a reachable API URL
- A MongoDB database configured for the backend

## Run locally

### 1. Clone the frontend

```bash
git clone https://github.com/NischalBhatta/bt_client.git
cd bt_client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API URL

Create a `.env` file in the frontend root (the same directory as `package.json`):

```env
VITE_ROOT_API=http://localhost:8000/
```

The application appends `api/v1` to this value, so keep the trailing slash. If your backend runs on another host or port, update this value and restart Vite.

> Vite exposes variables prefixed with `VITE_` to browser code. Do not put passwords, database connection strings, or other secrets in the frontend environment file.

### 4. Start the backend

Follow the setup guide in the [backend repository](https://github.com/NischalBhatta/bt_api). By default, the API is expected at `http://localhost:8000`.

### 5. Start the frontend

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal (usually `http://localhost:5173`). Sign up for an account, then log in to access the dashboard and transactions.

## Build for production

Create an optimised production build:

```bash
npm run build
```

Vite writes the generated static site to `dist/`. To preview the build locally:

```bash
npm run preview
```

The preview command serves the frontend build; it does not start the backend. The API must still be running and the configured API URL must be reachable.

## Available scripts

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Build the frontend into `dist/`      |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## API calls used by the client

The client uses the backend's versioned API routes:

- `POST /api/v1/users` — create an account
- `POST /api/v1/users/login` — log in
- `GET /api/v1/users` — retrieve the authenticated user profile
- `POST /api/v1/transactions` — create a transaction
- `GET /api/v1/transactions` — list the authenticated user's transactions
- `DELETE /api/v1/transactions` — delete selected transactions

Transaction endpoints require an access token in the `Authorization` header. The backend is responsible for verifying the token and limiting transaction queries to the authenticated user.

## Project structure

```text
bt_client/
├── public/                 # Static public assets
├── src/
│   ├── auth/               # Protected-route component
│   ├── components/         # Forms, transaction table, UI and chart components
│   ├── context/            # Shared user and transaction state
│   ├── helpers/            # API client and chart-data helpers
│   ├── hooks/              # Reusable form hook
│   ├── layout/             # Shared layout and dashboard charts
│   ├── pages/              # Login, signup, dashboard and transactions
│   ├── utils/               # User/session helpers
│   ├── App.jsx              # Routes and app setup
│   └── main.jsx             # React entry point
├── .env                     # Local environment settings (do not commit)
├── package.json
└── vite.config.js
```

## Development notes

- The frontend stores the returned JWT in browser `localStorage` and uses it for authenticated API requests. This is convenient for this project, but browser storage has security trade-offs; review the session approach before using the app for sensitive or production financial data.
- The dashboard visualises data returned by the API. It is a personal tracking tool, not a bank integration or financial-advice service.
- To contribute, create a branch, make a focused change, run `npm run lint` and `npm run build`, then open a pull request.

## Security

Never commit `.env` files or real credentials. If a credential has already been pushed to a public repository, remove it from the repository and rotate/revoke it; deleting the file in a later commit does not make the exposed secret safe.

## License

No explicit license file was present in the supplied project snapshot. Add a `LICENSE` file if you want to specify how others may use, modify, and distribute this project.
