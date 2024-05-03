import AddColumn from './AddColumn/AddColumn';
import ColumnCard from './ColumnCard/ColumnCard';

import css from './ScreensPage.module.css';
import icons from '../../images/symbol-defs.svg';
// import CardItem from './CardItem/CardItem';


const ScreensPage = () => {
    // Замінити на Бек

    // let boards = [
    //     {name: 'Project office', column: ['To Do', 'In Progress', 'Done'], id: '12345'},
    //     {name: 'Neon', column: [], id: '67890'},
    // ];

    let boards = {
        name: 'Project office', column: ['To Do', 'In Progress'], id: '12345'
    };

    let isBoardAdded = boards?.length !== 0;
    // console.log(boards, ' = isBoardAdded');

    const handleOpenModal = () => { 
        console.log("Має відкритися модальне вікно - Filters");
    }

    return (
        <section className={css.section}>
            <div className={isBoardAdded ? css.activeSettingsWrapper : css.settingsWrapper}>
                {isBoardAdded ? <h2 className={css.title}>{boards.name}</h2> : ''}
                <button className={css.button} type='button' onClick={handleOpenModal}>
                    <svg className={css.icon} width='16' height='16'>
                        <use href={icons + '#icon-filter'}></use>
                    </svg>
                    <p className={css.filterText}>Filters</p>
                </button>
            </div>
            <div className={css.columnListWrap}>

                <ul className={css.columnList}>
                    {boards?.column.map((item, index) => <ColumnCard key={index} name={item} />)}
                    {/* <CardItem /> */}
                </ul>

                {isBoardAdded ? <AddColumn/> : (
                    <div className={css.mainContentWrapper}>
                        <p className={css.text}>Before starting your project, it is essential <span className={css.accentText}>to create a board</span> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</p>
                    </div>)                
                }
            </div>
        </section>
    );
};


export default ScreensPage;