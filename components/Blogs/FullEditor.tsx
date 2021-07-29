import React, { useState, useEffect, useRef } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Editor from '@ckeditor/ckeditor5-react';

import { Box, Center } from '@chakra-ui/layout';
import styles from '../../styles/Blogs.module.scss';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';
export default function editor() {
    const [data, setData] = useState('');
    const dispatch = useDispatch();
    const [activate, setActivate] = useState(false);
    const [editor, setEditor] = useState(<div>Hello</div>);

    useEffect(() => {
        if (typeof editor !== 'undefined') {
            const { CKEditor } = require('@ckeditor/ckeditor5-react');
            const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
            setEditor(
                <CKEditor
                    editor={ClassicEditor}
                    onReady={() => {
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
        }
        if (!activate) setActivate(true);
    }, []);

    const sendToRedux = () => {
        dispatch({ type: actions.GET_BLOG_CONTENT, payload: data });
    };

    const handleEditorChanges = (event, editor) => {
        const currData = editor.getData();
        setData(currData);
    };

    return (
        <Box>
            <Box className={styles.blogContent} onBlur={() => sendToRedux()}>
                {typeof window !== 'undefined' ? editor : ''}
            </Box>
        </Box>
    );
}
