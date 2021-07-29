import {
    Button,
    Checkbox,
    CheckboxGroup,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from '@chakra-ui/react';
import { size } from 'lodash';
import React, { useState, useEffect } from 'react';

export default function ImageModal({
    openCommand,
    setOpen
}: {
    openCommand: boolean;
    setOpen: any;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [items, setItems] = useState([]);
    const [openModal, setOpenModal] = useState(openCommand);
    useEffect(() => {
        if (openCommand) {
            onOpen();
            setOpenModal(true);
            console.log('OnOpen claed');
        }
    }, [openCommand]);
    return (
        <Modal
            onClose={() => {
                setOpenModal(false);
                setOpen(false);
            }}
            size={'full'}
            isOpen={openModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <h1>Select Your Images</h1>
                    <h2>Maximum 6 images and 2 videos can be selected</h2>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h2>This is where all the stuff for content comes here</h2>
                    <CheckboxGroup
                        colorScheme="green"
                        defaultValue={['naruto', 'kakashi']}
                        onChange={(e) => setItems(e)}>
                        <HStack>
                            <Checkbox
                                value="naruto"
                                isDisabled={items.length == 2 && items.indexOf('naruto') == -1}>
                                Naruto
                            </Checkbox>
                            <Checkbox
                                value="sasuke"
                                isDisabled={items.length == 2 && items.indexOf('sasuke') == -1}>
                                Sasuke
                            </Checkbox>
                            <Checkbox
                                value="kakashi"
                                isDisabled={items.length == 2 && items.indexOf('kakashi') == -1}>
                                kakashi
                            </Checkbox>
                        </HStack>
                    </CheckboxGroup>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="pink">Save Changes</Button>
                    <Button onClick={() => setOpenModal(false)}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
