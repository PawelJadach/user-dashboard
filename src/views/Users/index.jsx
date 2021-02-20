import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/PageTitle';

const propTypes = {
    props: PropTypes.object,
};

const UsersPage = () => {
    return (
        <PageTitle title='User table' />
    );
};

UsersPage.propTypes = propTypes;

export default UsersPage;