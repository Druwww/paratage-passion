// @ts-ignore
import React from 'react';

import {Button} from '@mantine/core';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";

// @ts-ignore
function BouttonNavigation(props) {

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Button variant="subtle" onClick={() => navigate(props.path)}>
                    {t(props.name)}
            </Button>
        </React.Fragment>
    );
}

export default BouttonNavigation;