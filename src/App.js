import {Outlet} from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <>
        <Header/>
      <main>
        <Outlet/>
      </main>
      <footer>
      {/*  Footer here */}
      </footer>
    </>
  );
}

export default App;
