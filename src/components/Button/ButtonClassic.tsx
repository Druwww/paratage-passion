import React from 'react';

import {Button} from '@mantine/core';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ButtonClassicParams {
    id ?: string
    name : string,
    color ?: string,
    action() : any
}

/**
 * @param {ButtonClassicParams} props - Object with parameters
 * @param {string}  [props.id] - Components ID.
 * @param {string} props.name - Text display in the button
 * @param {string} [props.color] - Button Color
 * @param {function} props.action - To trigger when clicked
 * @returns {React.Fragment} - Classic action button
 */
function ButtonClassic(props: ButtonClassicParams) {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Button id={props.id} color={props.color ? props.color : "orange"} onClick={props.action}>
                {props.name}
            </Button>
        </React.Fragment>
    );
}

export default ButtonClassic;