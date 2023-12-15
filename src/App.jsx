import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './Pages/Search/Search';
import Country from './Pages/Country/Country';
import Template from './Partials/Template/Template';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Search />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
