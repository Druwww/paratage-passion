import { z } from 'zod';
import React from 'react';
import {Box, Button, Checkbox, Group, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

interface FormWelcomeParams {
    form : {
        Title : string,
        Email : string,
        ErrorEmail : string,
        Checkbox : string,
        Validation : string,
    }
    isPassionate : boolean
}



function FormWelcome(props:FormWelcomeParams) {

    const form = useForm({
        initialValues: {
            email: '',
            newsLetter: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : props.form.ErrorEmail),
        },
    });

    return (
        <React.Fragment>
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values, (props.isPassionate ? "Passionate" : "Adventurer")))}>
                    <TextInput
                        required
                        label={props.form.Title}
                        placeholder={props.form.Email}
                        {...form.getInputProps('email')}
                    />

                    <Checkbox
                        mt="md"
                        label={props.form.Checkbox}
                        {...form.getInputProps('newsLetter', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">{props.form.Validation}</Button>
                    </Group>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default FormWelcome;