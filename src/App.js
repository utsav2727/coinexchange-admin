import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrencyPage from './pages/CurrencyPage';

function App() {
  return (
    <>
    <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            icon={true}
          />
    <Dashboard/>
    </>
  );
}

export default App;
