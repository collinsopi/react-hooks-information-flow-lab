import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  const handleDarkModeClick = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={appClass}>
      {/* Use Header and pass props */}
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
