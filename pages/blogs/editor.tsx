import React, { useState, useEffect, useRef } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Editor from '@ckeditor/ckeditor5-react';
import Dynamic from 'next/dynamic';
import { Box, Center } from '@chakra-ui/layout';
import styles from '../../styles/Blogs.module.scss';
import { Button } from '@chakra-ui/button';
import UploadImageBlog from '@Component/Blocks/UploadImageBlog';
export default function editor() {
    const [data, setData] = useState('');
    const editorRef = useRef();
    const [activate, setActivate] = useState(false);
    const [editor, setEditor] = useState(<div>Hello</div>);
    const [editor2, setEditor2] = useState(<div>Get editor here</div>);
    // letitem;
    let item: JSX.Element = <div>Hello</div>;
    useEffect(() => {
        if (typeof editor !== 'undefined') {
            const { CKEditor } = require('@ckeditor/ckeditor5-react');
            const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
            setEditor(
                <CKEditor
                    editor={ClassicEditor}
                    onInit={() => {
                        console.log('Editor has started');
                    }}
                    onChange={handleEditorChanges}
                    config={{
                        ckfinder: {
                            uploadUrl: 'http://localhost:8080/api/v1/upload/singleimage'
                        },
                        removePlugins: ['uploadImage']
                    }}
                />
            );
            setEditor2(
                <CKEditor
                    editor={ClassicEditor}
                    onInit={() => {
                        console.log('Editor has started');
                    }}
                    onChange={handleEditorChanges}
                    config={{
                        toolbar: [
                            'bold',
                            'italic',
                            'link',
                            'undo',
                            'redo',
                            'numberedList',
                            'bulletedList'
                        ]
                    }}
                />
            );
        }
        if (!activate) setActivate(true);
    }, []);
    // const Editor = Dynamic(() => import('@ckeditor/ckeditor5-react').then(files=>files.CKEditor));
    // const ClassicEditor = Dynamic(() => import('@ckeditor/ckeditor5-build-classic'), {
    //     ssr: false
    // });
    const handleEditorChanges = (event, editor) => {
        const currData = editor.getData();
        setData(currData);
        console.log('Data received', currData);
        console.log('Data type from event', event);
    };
    if (typeof window !== undefined) {
    }
    return (
        <Box>
            <Box className={styles.blogContent}>
                {typeof window !== 'undefined' ? editor : ''}
                <Center my="1rem">
                    <Button mr="1rem" colorScheme="green">
                        Submit Blog
                    </Button>
                    <Button colorScheme="blue">Save as Draft</Button>
                </Center>
                {typeof window !== 'undefined' ? editor2 : ''}
            </Box>
        </Box>
    );
}
