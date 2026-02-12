import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>EShop</h1>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="btns">
                <button>Explore Now</button>
            </div>
        </div>

    )
}

export default Header;