import { BrowserRouter, Route, Routes } from "react-router-dom"

// routes
import { JobDetailsPage, JobsPage } from "./routes"

// custom-deps
import Navbar from "./components/navbar"



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
