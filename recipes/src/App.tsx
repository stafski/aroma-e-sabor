import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </>
  );
}

export default App;
