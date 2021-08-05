import {
    Box,
    Heading,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Flex,
    Text,
    Button,
    Img,
    Textarea,
    Select,
    SimpleGrid
} from '@chakra-ui/react';
import React from 'react';
import { Form, Formik, Field } from 'formik';
import { values, debounce } from 'lodash';
import MultiSelect from 'react-select';
import * as Yup from 'yup';
import { registerUser } from 'axiosApi/users';
import { useRouter } from 'next/dist/client/router';
const ChakraInput = ({
    name,
    error,
    touched,
    label,
    onChange,
    placeholder,
    type,
    onBlur,
    value
}: {
    name: string;
    label: string;
    error: string;
    touched?: boolean;
    onChange: any;
    placeholder: string;
    type: string;
    onBlur: any;
    value: string;
}) => (
    <FormControl isInvalid={error && touched} my={4}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input
            type={type}
            bg="white"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
        {!error && name.includes('username') && touched && (
            <Text w="100%" textAlign="left" color="green.400" fontSize="sm">
                Username available
            </Text>
        )}
    </FormControl>
);

const ChakraFormControl = ({ name, error, label, touched, children }) => (
    <FormControl isInvalid={error && touched} my={4}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        {children}
        <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
);

const options = [
    //demo variables, we get the categories as options from spring-boot
    { label: 'gardening', value: 'gardening' },
    { label: 'decor', value: 'decor' }
];

const validateUsername = (value) => {
    console.log(value);
    if (value === 'ashutosh') return true;
};

const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(4, 'Username atleast have 4 characters')
        .max(50, 'Username at max have 20 characters')
        .required('Please enter your fullName'),
    username: Yup.string()
        .min(4, 'Username atleast have 4 characters')
        .max(20, 'Username at max have 20 characters')
        .required('Please enter your username'),
    //.test('is-unique', 'username not available', (value, _) => validateUsername(value)),
    gender: Yup.string().required('Please select your gender'),
    about: Yup.string()
        .min(20, 'Bio must have 20 characters')
        .max(150, 'Bio extended must have 150 characters limit')
        .required('Please complete your bio'),
    interests: Yup.array()
        .min(2, 'Select atleast 2 categories')
        .required('Please select the categories'),
    city: Yup.string().required('Please select your city')
});

export default function RegisterForm({ categories, fullName, id, email, display_pic, jwt }) {
    const router = useRouter();
    return (
        <Flex p="3rem" justify="center">
            <Box
                textAlign="center"
                w="80%"
                bg="red.50"
                borderRadius="20px"
                border="2px solid"
                borderColor="pink.600"
                boxShadow="xl"
                px={6}
                py={2}>
                <Heading as="h1" size="lg" color="teal.700">
                    We are almost there!
                </Heading>
                <Flex w="100%" justify="space-around" align="stretch">
                    <Flex w="50%" alignItems="center" id="pictureHolder">
                        <Img
                            src="https://picsum.photos/200/250"
                            alt="wisaly signup image"
                            w="95%"
                            borderRadius="20px"
                        />
                    </Flex>
                    <Box w="40%">
                        <Formik
                            initialValues={{
                                id: id as Long,
                                first_name: (fullName.split(' ')[0] as string) ?? 'ash',
                                last_name: (fullName.split(' ')[1] as string) ?? 'tosh',
                                username: '',
                                email: email as string,
                                display_pic: display_pic as string,
                                about: '',
                                gender: '',
                                interests: [] as string[],
                                city: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async (values) => {
                                const status = (await registerUser(jwt, values)).status;
                                console.log('Values inside form is', values);
                                console.log('status is', status);
                                if (status === 202) {
                                    router.replace('/profile');
                                }
                            }}>
                            {({
                                handleSubmit,
                                handleChange,
                                values,
                                setFieldValue,
                                errors,
                                touched,
                                handleBlur
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <ChakraInput
                                        name="first_name"
                                        type="text"
                                        touched={touched.first_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.first_name}
                                        placeholder="Enter Name"
                                        label="First Name"
                                        value={values.first_name}
                                    />
                                    <ChakraInput
                                        name="last_name"
                                        type="text"
                                        touched={touched.last_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.last_name}
                                        placeholder="Enter Name"
                                        label="Last Name"
                                        value={values.last_name}
                                    />

                                    <ChakraInput
                                        name="username"
                                        type="text"
                                        onChange={handleChange}
                                        error={errors.username}
                                        touched={touched.username}
                                        placeholder="Enter Username"
                                        label="Username"
                                        value={values.username}
                                        onBlur={handleBlur}
                                    />
                                    <ChakraFormControl
                                        name="about"
                                        error={errors.about}
                                        touched={touched.about}
                                        label="About Yourself">
                                        <Textarea
                                            name="about"
                                            bg="white"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter Bio in 150 characters"
                                            resize="vertical"></Textarea>
                                    </ChakraFormControl>
                                    <ChakraFormControl
                                        name="gender"
                                        error={errors.gender}
                                        touched={touched.gender}
                                        label="Select Gender">
                                        <Select
                                            placeholder="Gender"
                                            name="gender"
                                            bg="white"
                                            onChange={handleChange}>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                            <option value="OTHER">Other</option>
                                        </Select>
                                    </ChakraFormControl>
                                    <ChakraFormControl
                                        name="interests"
                                        error={errors.interests}
                                        touched={touched.interests}
                                        label="Select your intertests">
                                        <MultiSelect
                                            options={categories}
                                            placeholder="Select Interests"
                                            onChange={(val) =>
                                                setFieldValue(
                                                    'interests',
                                                    val.map((val) => val.value)
                                                )
                                            }
                                            isMulti
                                        />
                                    </ChakraFormControl>
                                    <ChakraFormControl
                                        name="city"
                                        error={errors.city}
                                        touched={touched.city}
                                        label="Select City">
                                        <Select
                                            bg="white"
                                            placeholder="City"
                                            name="city"
                                            onChange={handleChange}>
                                            <option value="delhi">Delhi</option>
                                            <option value="noida">Noida</option>
                                            <option value="gurugram">Gurugram</option>
                                        </Select>
                                    </ChakraFormControl>
                                    <Button
                                        as="button"
                                        type="submit"
                                        onClick={() => alert('cl')}
                                        colorScheme="purple">
                                        Proceed
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}
