import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import BookList from './components/BookList';

function App() {

  const Routing = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-list/:category" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
