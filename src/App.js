import './App.css';
import data from './upcoming-events.json'
import { PageBoard } from './components/PageBoard.jsx';
import { GlobalStyle } from './GlobalStyle.js';
import { GiPublicSpeaker } from "react-icons/gi";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { FiType } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";

const icons = [HiMiniArrowRightStartOnRectangle , FiType, IoLocation, GiPublicSpeaker]


function App() {
  return ( <>
      <GlobalStyle />
      <PageBoard events={data} icons={icons}/>
  </>);
}



export default App;
