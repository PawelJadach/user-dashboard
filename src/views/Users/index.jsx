import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/PageTitle';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../features/users/usersSlice';

const propTypes = {
    props: PropTypes.object,
};

const UsersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <PageTitle title='User table' />
    );
};

UsersPage.propTypes = propTypes;

export default UsersPage;