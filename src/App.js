import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Icons from "./homepage Components/headerIcons";

import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Loginpage from './Pages/Loginpage';

function App() {
  return (
    <div className="App">
      <div className='viewBox'>
      <BrowserRouter>
      <div>
      <Icons />
      </div>
      <Routes>
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/HomePage" element={<Homepage />} />
        {/* <Route path="/Giveimpressionpage" element={<Giveimpressionpage />} />
        <Route path="/Profilepage" element={<Profilepage />} />
        <Route path="/Empojipage" element={<Empojipage />} />
        <Route path="/Leaderboardpage" element={<Leaderboardpage />} /> */}
      </Routes>
      </BrowserRouter>
      </div>      
    </div>
  );
}

export default App;
