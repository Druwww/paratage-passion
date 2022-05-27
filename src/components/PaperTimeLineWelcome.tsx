import React from 'react';
import {Paper, Text, Timeline} from "@mantine/core";

interface PaperTimelineWelcomeParams {
    data : {
        title : string,
        text : string
    }[],
    reverse? : true
}

function PaperTimelineWelcome(props:PaperTimelineWelcomeParams) {

    return (
        <React.Fragment>
            <Paper shadow="sm" p="md">
                <Timeline color="indigo" align={props.reverse ? "right" : "left"}>
                    {props.data.map((elem, num) =>
                        <Timeline.Item title={elem.title} bulletSize={24}>
                            <Text color="dimmed" size="sm">
                                {elem.text}
                            </Text>
                        </Timeline.Item>
                    )}
                </Timeline>
            </Paper>
        </React.Fragment>
    );
}

export default PaperTimelineWelcome;