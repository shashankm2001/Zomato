import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SearchPage from "./Components/Search";
import FinalPage from "./Components/Finalpage";

function App() {
  return (
  <>
 
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/search/:_id" element={<SearchPage/>}/> 
   <Route path="/final/:id" element={<FinalPage/>}/>
  </Routes>
 
  
  </>

  );};
export default App;
