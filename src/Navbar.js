//For the navbar

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>1NiTY</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white', 
                    backgroundColor: '#cd0e0e',
                    borderRadius: '8px'
                }}>Create</a>
            </div>
        </nav>
     );
}
 
export default Navbar;