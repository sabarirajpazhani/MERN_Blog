
import PostList from './pages/PostList';
import PostDetails from './pages/PostDetails'
import CategoryPosts from './pages/CategoryPosts'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<PostList/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
          <Route path='/posts/category/:id' element={<CategoryPosts/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
