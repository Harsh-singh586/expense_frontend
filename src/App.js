import ReactDOM from "react-dom/client";
import Landing from './landing_page/landing';
import Dashboard from './dashboard';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios';
import Loader from "./messagepopup/loader";
import Snackbar from "./messagepopup/snackbar";
import { useState } from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // default: true
    },

  },
})

function App() {

  const [isLoading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState(false)

  const snackbarVisibility = () => {
    setSnackbar(false)
  }


  axios.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      setSnackbar(true);
      localStorage.removeItem('token')
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      setLoading(false);

      return response;
    },
    (error) => {
      setLoading(false);
      setSnackbar(true)
      localStorage.removeItem('token')
      return Promise.reject(error);
    }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="dashboard" element={<Dashboard currLoc='dashboard' />} />
            <Route path="expense" element={<Dashboard currLoc='expense'></Dashboard>} />
            <Route path="income" element={<Dashboard currLoc='income'></Dashboard>} />
            <Route path="budget" element={<Dashboard currLoc='budget'></Dashboard>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {isLoading && <Loader></Loader>}
      {snackbar && <Snackbar snackbarVisibility={snackbarVisibility}></Snackbar>}
    </QueryClientProvider >
  );
}

export default App;
