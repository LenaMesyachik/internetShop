import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

export const TypeBar = observer(() => {
const {device} = useContext(Context)
        console.log(device)
        return (
            <ListGroup>
                {device._types.map(type =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
                )}
            </ListGroup>

        )
    }
)

