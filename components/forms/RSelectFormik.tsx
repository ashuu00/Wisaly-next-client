import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { Form, Formik, Field } from 'formik';
import Select from 'react-select';
export default function RSelectFormik() {
    const options = [ //demo variables, we get the categories as options from spring-boot
        { label: 'ash', value: 'ashu' },
        { label: 'nish', value: 'nishuu' }
    ];
    return (
        <Box>
            <Formik
                initialValues={{ cater: [], demo: '' }}
                onSubmit={(data) => {
                    console.log(data);
                    alert(data);
                }}>
                {({ handleChange, setFieldValue, handleSubmit, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Select
                            options={options}
                            onChange={(val) =>
                                setFieldValue(
                                    'cater',
                                    val.map((val) => val.value)
                                )
                            }
                            isMulti
                        />
                        <Input name="demo" type="text" onChange={handleChange} />
                        <Button colorScheme="pink" type="submit">
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        </Box>
    );
}
