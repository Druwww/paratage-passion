import React from 'react';
import {Center, Text, Timeline} from "@mantine/core";

interface TimelineWelcomeParams {
    data : {
        title : string,
        text : string
    }[],
    reverse? : true,
    color? : string
}

function TimeLineWelcome(props:TimelineWelcomeParams) {

    return (
        <React.Fragment>
            <Center>
                <Timeline color={props.color ? props.color : "grape"} align={props.reverse ? "right" : "left"} active={props.data.length}>
                    {props.data.map((elem, num) =>
                        <Timeline.Item title={elem.title} bulletSize={24} key={elem.title + num}>
                            <Text color="dimmed" size="sm">
                                {elem.text}
                            </Text>
                        </Timeline.Item>
                    )}
                </Timeline>
            </Center>
        </React.Fragment>
    );
}

export default TimeLineWelcome;