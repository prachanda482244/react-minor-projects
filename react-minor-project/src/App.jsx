import { Route, Routes } from "react-router-dom"
import Project1BgChanger from "./Projects/Project1/Project1BgChanger"
import Project2TextUtility from "./Projects/Project2/Project2TextUtility"
import Project3PasswordGenerator from "./Projects/Project3/Project3PasswordGenerator"
import Navbar from "./Components/Navbar"
import Project4Routing from "./Projects/Project4/Project4Routing"
import Project5Todo from "./Projects/Project5/Project5Todo"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/project1" element={<Project1BgChanger />} />
        <Route path="/project2" element={<Project2TextUtility />} />
        <Route path="/project3" element={<Project3PasswordGenerator />} />
        <Route path="/project4" element={<Project4Routing />} />
        <Route path="/project5" element={<Project5Todo />} />
      </Routes>

    </div>
  )
}

export default App
