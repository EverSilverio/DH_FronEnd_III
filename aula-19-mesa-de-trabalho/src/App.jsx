import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

   const [language, setLanguage] = useState(languages.english);

   const handleChangeLA = () => {
      setLanguage(() =>
         language === languages.english ? languages.portuguese : languages.english
      )
   }

   return (
      <div className="App">
         <>{  /*  DICA: Adicione o provider LanguageContext */}
            <LanguageContext.Provider value={{ language, handleChangeLA }}>
               <Navbar />
               <Body />
            </LanguageContext.Provider>
         </>
      </div>
   )
}

export default App