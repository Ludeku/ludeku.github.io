import Home from './components/Home';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Privacy from './components/Privacy';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    marginTop: 32
  }
}
function App() {
  return (
    <div style={styles.container}>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
    </div>

  );
}

export default App;
