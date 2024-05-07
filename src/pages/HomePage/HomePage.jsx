import { useState } from 'react';

import Filters from '../../components/Filters/Filters';
import { Header } from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar';

import css from './HomePage.module.css';
import cssSidebar from '../../components/Sidebar/sidebar.module.css'

// Overlay for sidebar
const Overlay = ({ onClick }) => (
  <div className={cssSidebar.overlay} onClick={onClick}></div>
);

const HomePage = () => {

    const handleCreateBoard = () => {
        console.log('Має відкритися модальне вікно - New Board');
    };

    // Функціонал для відкриття sidebar -----------
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openSidebar = () => {
    console.log('open sidebar')
    setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
    setIsSidebarOpen(false);
    };
    // ------------------

    return (<div className={css.homePage}>
        {isSidebarOpen ? (
            <>
            <Overlay onClick={closeSidebar} />
            <Sidebar className={cssSidebar.visible}/>
            </>
        ) : <Sidebar />}
        <div className={css.inner}>
            <Header openBurger={openSidebar} />
            <section className={css.section}>
            <div className={css.settingsWrapper}>
                <Filters />
            </div>

            <div className={css.textWrapper}>
                <p className={css.text}>
                    Before starting your project, it is essential
                    <a href="#" onClick={handleCreateBoard} className={css.link}> to create a board</a> to
                    visualize and track all the necessary tasks and milestones. This
                    board serves as a powerful tool to organize the workflow and
                    ensure effective collaboration among team members.
                </p>
            </div>
        </section>
            </div>
        
        </div>
    );
};


export default HomePage;
