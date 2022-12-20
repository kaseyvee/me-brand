import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import TemplateList from './components/TemplateList';
import Edit from './components/Edit';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  return (
    <BrowserRouter>
      {loading ? <Loading /> :
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<TemplateList />} />
          <Route path='/:id' element={<Edit />} />
        </Routes>
        <Footer />
      </div>
      }
    </BrowserRouter>
  );
}

export default App;
