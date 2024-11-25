
import '../css/header.css';
import Nav from "./Nav";
import Search from "./Search";
function Header(){

    return (
        <header className='main-header'>
            <Nav className="nav-bar"/>
            <Search className="search-container"/>
        </header>
    );

}
export default Header;