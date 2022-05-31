import React from 'react';
import {List} from "@mantine/core";

interface ListWelcomeParams {
    data : string[]
}

function ListWelcome(props:ListWelcomeParams) {

    return (
        <React.Fragment>

                <List style={{textAlign:"left"}}>
                    {props.data.map(elem =>
                        <List.Item>
                                {elem}
                        </List.Item>
                    )}
                </List>
        </React.Fragment>
    );
}

export default ListWelcome;