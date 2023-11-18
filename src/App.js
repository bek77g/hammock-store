import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './Routers/Routers';

function App() {
  return (
    <>
      <Routers />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
