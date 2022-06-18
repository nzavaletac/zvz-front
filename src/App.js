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
      <MessengerCustomerChat pageId="109544380864461" appId="476838759574500" />
      ,
    </>
  );
}

export default App;
