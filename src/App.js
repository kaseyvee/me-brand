import './App.scss';
import Header from './components/Header';
import TemplateList from './components/TemplateList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<TemplateList />} />
          <Route path='/:id' element={<TemplateList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
