import { Router } from 'react-router-dom';
import history from './history';
import './index.css'
import logo_backgroung from './imgs/gracie_logo.png';
import { renderRoutes } from './routes/index';
import routes from './routes/index';

function App() {
  return (
    <div className="App">
      <img src={logo_backgroung}/>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;