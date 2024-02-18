import { Route, Routes } from "react-router-dom"
import Project1BgChanger from "./Projects/Project1/Project1BgChanger"
import Project2TextUtility from "./Projects/Project2/Project2TextUtility"
import Project3PasswordGenerator from "./Projects/Project3/Project3PasswordGenerator"
import Navbar from "./Components/Navbar"
import Project4Routing from "./Projects/Project4/Project4Routing"
import Project5Accordian from "./Projects/Project5/Project5Accordian"
import Project6StarRating from "./Projects/Project6/Project6StarRating"
import Project7LoadMore from "./Projects/Project7/Project7LoadMore"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/project1" element={<Project1BgChanger />} />
        <Route path="/project2" element={<Project2TextUtility />} />
        <Route path="/project3" element={<Project3PasswordGenerator />} />
        <Route path="/project4/*" element={<Project4Routing />} />
        <Route path="/project5" element={<Project5Accordian />} />
        <Route path="/project6" element={<Project6StarRating noOfStars={10} />} />
        <Route path="/project7" element={<Project7LoadMore />} />

      </Routes>

    </div>
  )
}

export default App
