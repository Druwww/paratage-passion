import React from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

/**
 * @returns {React.Fragment} - A button that switch between dark and light mode
 */
function DarkLightSwitch() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <React.Fragment>
            <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
        </React.Fragment>
    );
}

export default DarkLightSwitch;