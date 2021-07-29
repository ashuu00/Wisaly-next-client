import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    position,
    useDisclosure
} from '@chakra-ui/react';
import { size } from 'lodash';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const photos = [
    {
        photo: 'https://source.unsplash.com/aZjw7xI3QAA/1144x763'
    },
    {
        photo: 'https://source.unsplash.com/c77MgFOt7e0/1144x763'
    },
    {
        photo: 'https://source.unsplash.com/QdBHnkBdu4g/1144x763'
    }
];

export default function gallery() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currImage, setCurrentImage] = useState({ idx: 0, link: '' });
    const handleImage = (photo, idx) => {
        setCurrentImage({ link: photo, idx: idx });
        onOpen();
    };

    return (
        <React.Fragment>
            <Flex>
                {photos.map((val, idx) => (
                    <Image
                        boxSize="150px"
                        key={idx}
                        src={val.photo}
                        onClick={() => handleImage(val.photo, idx)}
                    />
                ))}
            </Flex>
            <Modal onClose={onClose} size="full" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg="transparent">
                    <ModalCloseButton />
                    <ModalBody>
                        <Box position="relative">
                            <Image src={currImage.link} w="80%" ml="10%" />
                            <Icon
                                w={6}
                                h={6}
                                position="absolute"
                                as={FaArrowLeft}
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    setCurrentImage({
                                        idx: currImage.idx - 1,
                                        link: photos[currImage.idx - 1].photo
                                    })
                                }
                                top="50%"
                                left="5%"
                            />
                            <Icon
                                w={6}
                                h={6}
                                position="absolute"
                                as={FaArrowRight}
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    setCurrentImage({
                                        idx: currImage.idx + 1,
                                        link: photos[currImage.idx + 1].photo
                                    })
                                }
                                top="50%"
                                right="5%"
                            />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}
