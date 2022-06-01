import React from 'react';
import {List} from "@mantine/core";

interface ListWelcomeParams {
    data : string[]
}

function ListWelcome(props:ListWelcomeParams) {

    return (
        <React.Fragment>

                <List style={{textAlign:"left"}}>
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