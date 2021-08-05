import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useSelector } from 'react-redux';

export default function index() {
    const router = useRouter();
    //@ts-ignore
    const userName = useSelector((state) => state.userState).username;
    if (userName === '' || userName === undefined) router.push('/signup');
    else router.push(`/profile/${userName}`);
    return <div></div>; //this changed
}
