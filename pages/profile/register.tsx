import { getAllCategories } from '@Api/category';
import { getUserDetails } from '@Api/users';
import RegisterForm from '@Component/forms/RegisterForm';
import getTokenFromContext from 'functions/getTokenFromContext';
import titleCase from 'functions/titleCase';
import React from 'react';
import { useSelector } from 'react-redux';
import cookieCutter from 'cookie-cutter';

export default function register({ categories, details, token }) {
    console.log('details received is', details);

    const { first_name, last_name, email, display_pic, id } = details;
    const fullName = first_name + ' ' + last_name;
    return (
        <div>
            <RegisterForm
                categories={categories}
                fullName={fullName}
                id={id}
                email={email}
                jwt={token}
                display_pic={display_pic}
            />
        </div>
    );
}
register.getInitialProps = async (ctx) => {
    console.log('inside initalProps');
    const token = ctx.req ? getTokenFromContext(ctx, 'jwt') : cookieCutter.get('jwt');
    const username = ctx.req
        ? getTokenFromContext(ctx, 'activeUser')
        : cookieCutter.get('activeUser');
    const currUsername = username.split('-')[1];
    console.log('got username', currUsername);

    if (token === '-1' || token === undefined) {
        ctx.res.writeHead(301, {
            Location: '/signup'
        });
        ctx.res.end();
        return;
    }
    const allCategories = (await getAllCategories()).data;
    const labelValues = allCategories.map(({ category }, _) => {
        return { value: category, label: titleCase(category) };
    });
    const userDetails = (await getUserDetails(token, currUsername)).data;
    console.log('got categories', labelValues);
    return { categories: labelValues, details: userDetails, token: token };
};
