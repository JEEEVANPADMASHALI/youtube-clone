
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./responsive.css";
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import { useState} from 'react';
import VideoPage from './Pages/VideoPage/VideoPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import UploadPage from './pages/uploadPage/UploadPage';
import SignupPage from './pages/signupPage/SignupPage';
import SearchResultsPage from './components/searchResults/SearchResultsPage';




function App() {

  const [sidebar, setSidebar] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  

  // Function to update sidebar state
  const setSidebarFun=(value)=>{
    setSidebar(value)
  }
  return (
    <div className="App">

      {/* Navbar component with sidebar state and function */}
      <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar} setSearchResults={setSearchResults}/>

      {/* application routes */}
      <Routes>
        <Route path='/' element={<HomePage sidebar={sidebar} searchResults={searchResults}/>}/>
        <Route path='/watch/:id' element={<VideoPage/>}/>
        <Route path='/user/:id' element={<ProfilePage sidebar={sidebar}/>}/>
        <Route path="/search" element={<SearchResultsPage searchResults={searchResults} sidebar={sidebar}/>} />
        <Route path='/:id/upload' element={<UploadPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;