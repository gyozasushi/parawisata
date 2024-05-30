import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


function NavBar(){
    const [expand,setExpanded] = useState(false);
    const [navColour,setColour] = useState(false);
    
    function scrollHandler(){
        setColour(window.scrollY >= 20 ? true : false);

    }
window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        expanded = {expand}
        fixed="top"
        expand="md"
        className={navColour? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                   Welcome
                </Navbar.Brand>
                <Navbar.Toggle
                
                onClick={() => {
                    setExpanded(expand ? false : "expanded");
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>


                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                                Home
                            </Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/destination" onClick={() => setExpanded(false)}>
                                Destination
                            </Nav.Link>
                            
                        </Nav.Item>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


