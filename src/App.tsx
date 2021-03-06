import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";
import {Body} from "./components/Body/Body";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Body/>
                {/*<Dialogs/>*/}
                {/*<Profile/>*/}
            </div>

        </div>
    );
}

export default App;
