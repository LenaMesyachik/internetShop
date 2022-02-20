import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
export const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "yellow"}} to={SHOP_ROUTE}>DEVICE STORE</NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto" style={{color: "yellow"}}>
                        <Button variant={'outline-light'} onClick={()=>history(ADMIN_ROUTE)}>Admin</Button>
                        <Button variant={'outline-light'} onClick={()=>logOut()} className='ml-2'>Login</Button>
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

