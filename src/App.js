import './App.css';
import { Route, Routes } from 'react-router';
import { Search } from './Pages/Search/Search';
import { Report } from './Pages/Report/Report';
import { Styles } from './Styles';

function App() {
  return (
    <div style={Styles.main}>

      <Routes>

        <Route path="/" element={<Search />} />
        <Route path="/report" element={<Report />} />

      </Routes>

    </div>
  );
}

export default App;
