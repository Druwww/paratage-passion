import React from 'react';
import {List} from "@mantine/core";

interface ListWelcomeParams {
    id?: string
    data : string[]
}

/**
 * @param {ListWelcomeParams} props - Object with parameters
 * @param {string}  [props.id] - Component id
 * @param {string[]}  props.data - all the elements to display in the list
 * @returns {React.Fragment} - List of string for the welcome page
 */
function ListWelcome(props:ListWelcomeParams) {

    return (
        <React.Fragment>

                <List id={props.id} style={{textAlign:"left"}} size="lg" >
                    {props.data.map((elem, num) =>
                        <List.Item key={elem + num}>
                                {elem}
                        </List.Item>
                    )}
                </List>
        </React.Fragment>
    );
}

export default ListWelcome;