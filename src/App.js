import './App.css';

import { HowLongToBeatService } from 'howlongtobeat';

let hltbService = new HowLongToBeatService();

function App() {

  const searchByID = (id) => {
    let response;
    hltbService.detail(id).then(result => result = response).catch(e => console.error(e));
    return response;
  }
  return (
    <div className="App">
      <header className="App-header">
        {console.log(searchByID(36936))}
      </header>
    </div>
  );
}

export default App;
