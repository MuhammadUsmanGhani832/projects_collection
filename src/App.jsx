import './App.css';
import Home from './screen/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path='/'
              element={<div>
                <Home />
              </div>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
