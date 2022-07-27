import React, {useState} from 'react';
import {
    ActionIcon,
    Group,
    Radio,
    RadioGroup,
    Text,
} from "@mantine/core";
import {getFirestore, doc, updateDoc} from "firebase/firestore";

import { getAuth} from "firebase/auth";
import {useForm} from "@mantine/form";
import {Send} from "tabler-icons-react";

interface FormUpdateUserTypeParams {
    type : string
}

/**
 * @param {FormUpdateUserTypeParams} props - Object with parameters
 * @param {string} props.type - The actuel user type (Adventurer|Passionate
 * @returns {React.Fragment} Form to update the user type
 */
function FormUpdateUserType(props:FormUpdateUserTypeParams) {

    const db = getFirestore();
    const auth = getAuth();

    const [loading, setLoading] = useState(false);

    let form = useForm({
        initialValues: {
            type : props.type
        },
        validate: {
        },
    });

    const askUpdate = async (values : {type : string}) => {

        setLoading(true)

        if (auth.currentUser) {
            updateDoc(doc(db, "userData", auth.currentUser.uid), {
                ...values
            }).then(() => {
                setLoading(false)
            }).catch((error) => {
                console.error("Error update email change")
            });
        }

    }


    return (
        <React.Fragment>
            <form onSubmit={form.onSubmit(askUpdate)}>
                <Group mt="xs" mb="xs">
                    <Text weight={500} size="sm" sx={{ flex: 1 }}>
                        Type
                    </Text>
                </Group>
                <Group mb="xs">
                    <RadioGroup
                        required
                        sx={{ flex: 1 }}
                        {...form.getInputProps('type')}
                    >
                        <Radio value="Adventurer" label="Adventurer" />
                        <Radio value="Passionate" label="Passionate" />
                    </RadioGroup>
                    <ActionIcon loading={loading} type="submit" color="green" variant="filled"><Send size={16} /></ActionIcon>
                </Group>
            </form>
        </React.Fragment>
    );
}

export default FormUpdateUserType;