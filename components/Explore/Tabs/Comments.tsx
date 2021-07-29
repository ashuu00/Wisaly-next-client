import { addCommentCard } from '@Api/displayCard';
import { getBasicDetails, getUserDetails } from '@Api/users';
import { Box, Circle, Flex, VStack, Text, HStack, Input, useToast } from '@chakra-ui/react';
import { addComment } from 'dto/apisDto/comments';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/actions';

export default function Comments({
    comments,
    loggedInUser,
    token,
    cardId
}: {
    comments: addComment[];
    token: string;
    loggedInUser: boolean;
    cardId: Long;
}) {
    const toast = useToast();
    const dispatch = useDispatch();
    const getUser = async (token) => {
        alert('Called getUser');
        const data = (await getBasicDetails(token)).data;
        dispatch({
            type: actions.GET_USER_DETAILS,
            payload: {
                jwtToken: token,
                first_name: data.first_name,
                last_name: data.last_name,
                id: data.id,
                email: data.email,
                display_pic: data.display_pic,
                username: data.username,
                updated: true
            }
        });
    };
    //@ts-ignore
    const userState = useSelector((state) => state.userState);
    if (!userState.updated && loggedInUser) {
        getUser(token);
    }
    const [Comment, setComment] = useState('');
    const [commentArray, setCommentArray] = useState(comments);
    const handleInputEnter = async (e) => {
        if (e.keyCode === 13) {
            commentArray.push({
                authorName: userState.first_name + ' ' + userState.last_name,
                created: '1m ago',
                content: Comment
            });
            try {
                console.log('Added toek', userState.token, cardId);

                await addCommentCard(userState.token, { content: Comment, exploreCard: cardId });
            } catch (err) {
                alert(err);
            }
            setComment('');
            toast({
                title: 'Added Comment',
                status: 'success',
                duration: 5000,
                isClosable: true
            });
        }
    };
    const handleInputChange = (e) => {
        setComment(e.target.value);
    };
    return (
        <Box>
            <VStack spacing={16} py={6}>
                {commentArray.map((val, idx) => (
                    <Flex h={8} w="95%" align="center" key={idx}>
                        <Circle size={20} bg="red.100"></Circle>
                        <Box
                            as="div"
                            ml={4}
                            p={2}
                            border="2px solid"
                            borderRadius="20px"
                            w="85%"
                            h="auto"
                            borderColor="gray.400"
                            bg="gray.50">
                            <Flex align="baseline">
                                <Text fontSize="lg" fontWeight="medium" color="gray.600">
                                    {val.authorId === userState.id ? 'Me' : val.authorName}
                                </Text>
                                <Text fontSize="md" ml={1} fontWeight="normal" color="gray.500">
                                    {val.created} ago
                                </Text>
                            </Flex>
                            <Text fontSize="md" fontWeight="normal" color="gray.600">
                                {val.content}
                            </Text>
                        </Box>
                    </Flex>
                ))}

                {loggedInUser ? (
                    <Flex h={8} w="95%" align="center">
                        <Circle size={20} bg="red.100"></Circle>
                        <Input
                            ml={4}
                            p={2}
                            border="2px solid"
                            borderRadius="20px"
                            w="85%"
                            h="auto"
                            value={Comment}
                            placeholder="Add a comment"
                            borderColor="gray.400"
                            bg="gray.100"
                            onChange={handleInputChange}
                            onKeyUp={handleInputEnter}
                        />
                    </Flex>
                ) : (
                    <Text fontSize="xl">Sign-in to comment on this card</Text>
                )}
            </VStack>
        </Box>
    );
}
