import './App.css';
import { Route, Routes } from 'react-router';
import { Search } from './Pages/Search/Search';
import { Report } from './Pages/Report/Report';
import { Styles } from './Styles';
import { TableModal } from './Components/TableModal/TableModal';

function App() {
  return (
    <div style={Styles.main}>

      <Routes>

        <Route path="/" element={<Search />} />
        <Route path="/report" element={<Report />} />
        <Route path="/modal" element={<TableModal />}/>

      </Routes>

    </div>
  );
}

export default App;
