import React, { useEffect } from 'react'
import {
    Link,
    Route,
    Routes,
    NavLink
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

 


function App() {

    
  useEffect(() => {
    let menuflag = 0;
   const btn =  document.getElementById('burger-menu');
   btn?.addEventListener("click", function (e) {
    const menu = document.getElementsByClassName('menudiv')[0] as HTMLElement;
    if (menu && menuflag ==0 ) {
        menu.style.display = 'grid';
        menuflag = 1;
    }
    else{
        menu.style.display = 'none';
        menuflag =0;
    }
  });

  }, []);
    return (
        <div className="App">
            <div>
            <div id="burger-menu"></div>
                <div  className='menudiv'> 
                    <NavLink className='linkstyle' to={'/'}>
                        Все о товаре
                    </NavLink>
                    <NavLink to={'/about'} 
                       className='linkstyle' >
                        Характеристики
                    </NavLink>
                    <NavLink to={'/contact'}
                       className='linkstyle' >
                        Отзывы
                    </NavLink>
                    <NavLink to={'/Questions'}
                       className='linkstyle' >
                        Вопросы
                    </NavLink>
                    <NavLink to={'/Videos'}
                       className='linkstyle' >
                        Видео
                    </NavLink>
                    <NavLink to={'/Buytogether'}
                      className='linkstyle'  >
                        Покупают вместе
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path="/"
                    element={<Home />} />
                <Route path="/about"
                    element={<About />} />
                <Route path="/contact"
                    element={<Contact />} />
            </Routes>
            
        </div>
    );
}
 
export default App;