import React from "react";
import "./index.css";
import { Sidebar } from "./components/Sidebar";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App bg-black min-h-screen w-full flex flex-[100%] justify-center ">
      <div className="flex flex-[80%] max-w-[65%]">
        <Sidebar />

        <div className="flex w-[50%] flex-col overflow-hidden">
          <Profile />
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;
