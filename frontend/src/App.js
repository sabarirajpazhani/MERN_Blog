
import PostList from './pages/PostList';
import PostDetails from './pages/PostDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<PostList/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
