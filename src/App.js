import React, {useState} from 'react'
import {
    HashRouter as Router, 
    Route, 
    Routes
} from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode= () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <Router>
            <div className={`container ${darkMode ? 'dark' : ''}`}>
                <div className='app'>
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                    <Routes>
                        <Route path='/' exact element={<NotesListPage />} />
                        <Route path='/note/:id' element={<NotePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
