import React from 'react';

import {useTranslation} from "react-i18next";
import {Space, Title} from "@mantine/core";

function Map() {

    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Title order={1}>Map Page</Title>
            <Space h="xl" />
            <iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
        </React.Fragment>
    );
}

export default Map;
