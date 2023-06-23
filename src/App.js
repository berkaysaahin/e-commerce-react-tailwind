import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import PageContainer from './containers/PageContainer';
import 'tailwindcss/tailwind.css';
import './index.css'
import { useSelector } from 'react-redux';
import Card from './components/Card';
import Detail from './pages/Detail';

function App() {
  const {drawer} =  useSelector(state => state.drawer)

  return (
    <div className="App">
      <BrowserRouter>
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='detail/:id' element={<Detail/>} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </PageContainer>
      </BrowserRouter>

    </div>
  );
}

export default App;
