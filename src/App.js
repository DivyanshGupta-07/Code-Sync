import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import EditorPage from "./pages/EditorPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              duration: 2000,
              theme: {
                primary: "red",
                secondary: "black",
              },
              style: {
                background: "#363636",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
