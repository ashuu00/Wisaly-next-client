import React, { useState, useEffect, useRef } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Editor from '@ckeditor/ckeditor5-react';
import Dynamic from 'next/dynamic';
import { Box, Center } from '@chakra-ui/layout';
import styles from '../../styles/Blogs.module.scss';
import { Button } from '@chakra-ui/button';

export default function editor({ ...props }) {
    const [data, setData] = useState('');
    const editorRef = useRef();
    const [activate, setActivate] = useState(false);
    const [editor, setEditor] = useState(<div>Hello</div>);

    useEffect(() => {
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
                    toolbar: [
                        'bold',
                        'italic',
                        'link',
                        'undo',
                        'hyperlink',
                        'redo',
                        'numberedList',
                        'bulletedList'
                    ]
                }}
            />
        );

        if (!activate) setActivate(true);
    }, []);

    const handleEditorChanges = (event, editor) => {
        const currData = editor.getData();
        setData(currData);
        console.log('Data received', currData);
        console.log('Data type from event', event);
    };
    if (typeof window !== undefined) {
    }
    return (
        <Box {...props}>
            <Box className={styles.blogContent}>
                {typeof window !== 'undefined' ? editor : ''}
                <Center my="1rem"></Center>
            </Box>
        </Box>
    );
}
