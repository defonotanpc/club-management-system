//Root component

import Navbar from './Navbar';
import Home from './Home';

function App() {
  /*const title = "Welcome to 1NiTY";
  const num = 50;
  const link = 'https://www.youtube.com/watch?v=0sSYmRImgRY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=5'*/
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

