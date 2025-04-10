
import PostList from './pages/PostList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PostList/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
