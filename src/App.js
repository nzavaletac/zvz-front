import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <MessengerCustomerChat
        pageId={process.env.PAGE_ID}
        appId={process.env.APP_ID}
        language="es_ES	"
      />
      ,
    </>
  );
}

export default App;
