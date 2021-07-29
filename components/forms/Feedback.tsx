import React, { useEffect, useState } from 'react';
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Icon,
    ModalCloseButton,
    useDisclosure,
    Textarea,
    useToast,
    toast
} from '@chakra-ui/react';
import { FaMoon, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useSelector, useDispatch } from 'react-redux';
import { postFeedback } from '@Api/users';
export default function Feedback() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    //@ts-ignore
    let feedback = useSelector((state) => state.modalState).feedback;
    //@ts-ignore
    let token = useSelector((state) => state.userState).token;
    const dispatch = useDispatch();
    const [rating, setRating] = useState(3);
    const [message, setMessage] = useState('');
    useEffect(() => {
        console.log('feedback is ', feedback);
        //@ts-ignore
        if (feedback) {
            onOpen();
        }
    }, [feedback]);
    const handleSubmit = async () => {
        alert(`${rating} ${message}`);
        try {
            const msg = (await postFeedback(token, { rating, message })).data;
            toast({
                status: 'success',
                duration: 6000,
                title: 'Subimtted Feedback',
                description: msg
            });
        } catch (err) {
            toast({ status: 'error', duration: 6000, title: 'Problem in adding the feedback' });
        }
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                onClose();
                dispatch({ type: 'CLOSE_FEEDBACK' });
            }}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>How was your experience?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Rating
                        onChange={(e) => setRating(e)}
                        initialRating={rating}
                        fullSymbol={<Icon as={FaStar} color="pink.100" w={6} h={6} mx={2} />}
                        emptySymbol={<Icon as={FaStar} color="green.100" w={6} h={6} mx={2} />}
                    />
                    <Textarea
                        my={8}
                        placeholder="Your feedback here"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="purple" mr={3} onClick={handleSubmit}>
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
