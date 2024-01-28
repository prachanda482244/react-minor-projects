import { Route, Routes } from "react-router-dom"
import Project1BgChanger from "./Projects/Project1/Project1BgChanger"
import Project2TextUtility from "./Projects/Project2/Project2TextUtility"
import Project3PasswordGenerator from "./Projects/Project3/Project3PasswordGenerator"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/project1" element={<Project1BgChanger />} />
        <Route path="/project2" element={<Project2TextUtility />} />
        <Route path="/project3" element={<Project3PasswordGenerator />} />
      </Routes>

    </div>
  )
}

export default App
