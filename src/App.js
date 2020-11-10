import { Provider } from './context/GlobalContext';
const { default: Home } = require('./components/Home');
const { default: Navbar } = require('./components/Navbar');

function App() {
  return (
    <Provider>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
