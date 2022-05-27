import { z } from 'zod';
import React from 'react';
import {Box, Button, Checkbox, Group, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

interface FormWelcomeParams {
    data : string
}



function FormWelcome(props:FormWelcomeParams) {

    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <React.Fragment>
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        required
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />

                    <Checkbox
                        mt="md"
                        label="I agree to sell my privacy"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default FormWelcome;