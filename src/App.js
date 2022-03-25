import {Outlet} from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
      <div className="main">
          <Header/>
          <main>
              <Outlet/>
          </main>
          <footer>
              {/*  Footer here */}
          </footer>
      </div>
  );
}

export default App;
