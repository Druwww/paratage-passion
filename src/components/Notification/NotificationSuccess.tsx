import {showNotification} from "@mantine/notifications";
import {Check} from "tabler-icons-react";

/**
 * @param {string} title - Success notification title
 * @param {string}  message - Success notification message
 * @returns {} - Pop the success notification
 */
const notificationSuccess = (title : string, message :string) => {
    showNotification({
        title : title,
        message : message,
        color: 'green',
        icon: <Check />,
        autoClose: 6000,
    })
}

export default notificationSuccess