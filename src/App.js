import React from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar></Navbar>
          <BookList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
