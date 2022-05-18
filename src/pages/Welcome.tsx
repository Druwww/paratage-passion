import React from 'react';

import {useTranslation} from "react-i18next";
import {Button, Space, Title} from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Welcome() {

    const { t } = useTranslation();

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Title order={1}>{t("Welcome Text")}</Title>
            <Space h="xl" />
            <iframe src="https://giphy.com/embed/JIX9t2j0ZTN9S" width="480" height="480" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
            <Space h="xl" />
            <Button color="red" onClick={() => navigate('map')}>Map</Button>
        </React.Fragment>
    );
}

export default Welcome;
