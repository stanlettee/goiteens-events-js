import './App.css';
import data from './upcoming-events.json'
import { PageBoard } from './components/PageBoard.jsx';
import { GlobalStyle } from './GlobalStyle.js';

function App() {
  return ( <>
      <GlobalStyle />
      <PageBoard events={data}/>
  </>);
}



export default App;
