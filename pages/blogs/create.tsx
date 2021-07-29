import React, { useState } from 'react';
import FullEditor from '../../components/Blogs/FullEditor';
import {
    Box,
    VStack,
    Text,
    Input,
    FormLabel,
    Textarea,
    Button,
    Flex,
    useToast
} from '@chakra-ui/react';
import DescribeEditor from '../../components/Blogs/DescribeEditor';
import UploadImageBlog from '@Component/Blocks/UploadImageBlog';
import Select from 'react-select/creatable';
import Feedback from '@Component/forms/Feedback';
import { BlogUpload } from 'dto/blogs/blog';
import { addCategory, getAllCategories } from '@Api/category';
import { postBlog } from '@Api/blogs';
import titleCase from '../../functions/titleCase';
import { useSelector } from 'react-redux';
import { sendData } from 'next/dist/next-server/server/api-utils';
import { addBlogTitleImage } from '@Api/media';
export default function create({ categories }) {
    const toast = useToast();
    const options = categories.map((item, _) => {
        return { label: titleCase(item.category), value: item.category };
    });

    //@ts-ignore
    const blogState = useSelector((state) => state.blogState);

    //@ts-ignore
    const userState = useSelector((state) => state.userState);
    const [blogData, setBlogData] = useState({
        title: '',
        description: '',
        archived: false,
        categories: []
    });

    const handleCategory = (event) => {
        // console.log(
        //     'Event is',
        //     event.map((e) => e.value)
        // );
        setBlogData({ ...blogData, categories: event.map((e) => e.value) });
    };

    const handleNewCategory = async (event: string) => {
        try {
            const getData = await addCategory(userState.token, event);
            toast({
                title: 'Created category',
                description: `${event} created successfully!`,
                status: 'success',
                duration: 9000,
                isClosable: true
            });
            options.push({ value: event.toLowerCase(), label: titleCase(event) });
            console.log(titleCase(event));
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    const handleUpload = async () => {
        if (
            blogData.categories.length == 0 ||
            blogData.title === '' ||
            blogData.description === ''
        ) {
            toast({
                title: 'Incomplete Details.',
                description: 'Please Complete all details.',
                status: 'warning',
                duration: 4000,
                isClosable: true
            });
            return;
        }
        let upload = new FormData();
        let blogImage = blogState.title_pic;
        upload.append('upload', blogImage);

        const titlePicUrl = await addBlogTitleImage(upload);
        const completeContent = {
            ...blogData,
            title_pic: titlePicUrl.data,
            content: blogState.content
        };
        console.log(completeContent, userState.token);
        try {
            await postBlog(completeContent, userState.token);
            toast({
                title: 'Blog Submitted Successfully',
                //description: 'Please Complete all details.',
                status: 'success',
                duration: 9000,
                isClosable: true
            });
        } catch (err) {
            toast({
                title: 'Error while saving blog',
                description: err.response.data.message,
                status: 'error',
                duration: 9000,
                isClosable: true
            });
        }
    };

    return (
        <VStack w="100%">
            <Box w="50%">
                <UploadImageBlog />
                <Box my={8}>
                    <FormLabel htmlFor="title">Blog Title</FormLabel>
                    <Input
                        name="title"
                        onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                        placeholder="Enter Blog Title in 80 words"
                        bg="white"
                        type="text"
                    />
                </Box>
                <Box my={8}>
                    <FormLabel htmlFor="description">Blog Description</FormLabel>
                    <Textarea
                        name="description"
                        placeholder="Enter Blog Description in 200 words"
                        bg="white"
                        onChange={(e) => setBlogData({ ...blogData, description: e.target.value })}
                        type="text"
                    />
                </Box>
                <Box my={8}>
                    <FormLabel htmlFor="description">Select Categories (Max:2)</FormLabel>
                    <Select
                        id="long-value-select"
                        instanceId="long-value-select"
                        name="category"
                        options={options}
                        placeholder="Select Category"
                        onChange={handleCategory}
                        onCreateOption={handleNewCategory}
                        isMulti
                    />
                </Box>
                <FormLabel>Blog Content</FormLabel>
                <FullEditor />
                {/* <DescribeEditor /> */}
                <Flex w="100%" justify="center" my={8}>
                    <Button colorScheme="purple" onClick={handleUpload}>
                        Submit Blog
                    </Button>
                </Flex>
            </Box>
        </VStack>
    );
}

create.getInitialProps = async (ctx) => {
    const categories = await getAllCategories();
    console.log(categories.data);

    return {
        categories: categories.data
    };
};
