import { useState } from 'react';

import SideMenu from '../SideMenu';
import Favorite from '../Favorite';
import Account from '../Account';
import Catalog from '../Catalog';
import AdminPanel from '../AdminPanel';

import Logo from '../../images/Logo.png';

import './App.scss';

export const CHOOSEN_PAGE = {
  Account: 'Account',
  Favorite: 'Favorite',
  Catalog: 'Catalog',
  AdminPanel: 'AdminPanel',
};

function App() {
  const [choosenPage, setChoosenPage] = useState(CHOOSEN_PAGE.Catalog);
  return (
    <div className="App">
      <SideMenu setChoosenPage={setChoosenPage} />
      <div className='Logo'>
        <label>CinemaLog</label>
        <img src={Logo} alt="Logo" />
      </div>
      {
        (choosenPage === CHOOSEN_PAGE.Catalog) ?
          <Catalog /> :
          (choosenPage === CHOOSEN_PAGE.Account) ?
            <Account /> :
            (choosenPage === CHOOSEN_PAGE.Favorite) ?
              <Favorite /> :
              (choosenPage === CHOOSEN_PAGE.AdminPanel) ?
                <AdminPanel /> :
                <div></div>
      }
    </div>
  );
}

export default App;
