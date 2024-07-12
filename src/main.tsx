import React from 'react'
import ReactDOM from 'react-dom/client'
import {PublicRoute} from "./routes/PublicRoute.tsx";

ReactDOM.createRoot(document.getElementById('#root')!).render(
  <React.StrictMode>
    <PublicRoute />
  </React.StrictMode>,
)
