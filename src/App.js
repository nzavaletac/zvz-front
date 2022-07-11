import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <>
      <MessengerCustomerChat
        pageId={process.env.REACT_APP_PAGE_ID}
        appId={process.env.REACT_APP_APP_ID}
        language="es_ES	"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
