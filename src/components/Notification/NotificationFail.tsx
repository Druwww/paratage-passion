import {showNotification} from "@mantine/notifications";
import {AlertTriangle} from "tabler-icons-react";

/**
 * @param {string} title - Fail notification title
 * @param {string}  message - Fail notification message
 * @returns {} - Pop the fail notification
 */
const notificationFail = (title : string, message :string) => {
    showNotification({
        title : title,
        message : message,
        color: 'red',
        icon: <AlertTriangle/>,
        autoClose: 5000,
    })
}

export default notificationFail