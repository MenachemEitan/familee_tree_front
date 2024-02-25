import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import  Login  from "./login"



export const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="*" element={<Login></Login>} />
          <Route path="homePage" element = {<HomePage></HomePage>}/>
        </Routes>
    </div>
  );
};

export default App