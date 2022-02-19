import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

export const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "yellow"}} to={SHOP_ROUTE}>DEVICE STORE</NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto" style={{color: "yellow"}}>
                        <Button variant={'outline-light'}>Admin</Button>
                        <Button variant={'outline-light'} className="m-lg-3">Come in</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "yellow"}}>
                        <Button variant={'outline-light'} onClick={()=>user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
                    </Container>
                    </Navbar>

                    );
                }
)

