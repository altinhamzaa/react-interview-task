import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./Components/TopBar";
import JobsTable from "./Components/JobsTable";
import StatusCard from "./Components/StatusCard";
import "./App.css"

function App() {

  return (
    <div className="app">
      <StatusCard />
      <TopBar />
      <JobsTable />
    </div>
  )
}

export default App
