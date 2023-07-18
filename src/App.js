import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import { ThemeContext } from './context/theme-context';
import Home from './pages/Home';
import Layout from './components/Layout';
import Portfilo from './pages/Portfilo';
import ContactUs from './pages/ContactUs';
import Members from './pages/Members';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import CreatePost from './pages/CreatePost';
import EducationHub from './pages/EducationHub';

function App() {

  const isBrowserDefaulDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("default-theme")
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light"
    return localStorageTheme || browserDefault
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <Router>
      <UserContextProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`theme-${theme}`}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
              <Route path='/portfilo' element={<Layout />}>
                <Route index element={<Portfilo />} />
              </Route>
              <Route path='/contact' element={<Layout />}>
                <Route index element={<ContactUs />} />
              </Route>
              <Route path='/members' element={<Layout />}>
                <Route index element={<Members />} />
              </Route>
              <Route path='/eduhub' element={<Layout />}>
                <Route index element={<EducationHub />} />
              </Route>
              <Route path='/login' element={<Layout />}>
                <Route index element={<LoginPage />} />
              </Route>
              <Route path='/post:id' element={<Layout />}>
                <Route index element={<PostPage />} />
              </Route>
              <Route path='/edit:id' element={<Layout />}>
                <Route index element={<EditPost />} />
              </Route>
              <Route path='/create' element={<Layout />}>
                <Route index element={<CreatePost />} />   
              </Route>         
            </Routes>
          </div>
        </ThemeContext.Provider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
