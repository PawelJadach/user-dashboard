import React from "react";
import PropTypes from "prop-types";

import { withUsers } from "../../hoc/withUsers";
import { addNewUser } from "../../features/users/usersSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserForm from "../../features/users/UserForm";
import Card from "../../components/Card";

const propTypes = {
    users: PropTypes.array,
};

const AddUser = ({ users }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async data => {
        const ids = users.map(({ id }) => id);
        let freeId = 11;

        while(ids.includes(freeId)) freeId++;

        const success = await dispatch(addNewUser({...data, id: freeId}));

        if(success){
            history.push("/");
        }
    };

    return (
        <Card title="Add user">
            <UserForm submit={handleSubmit} />
        </Card>
    );
};

AddUser.propTypes = propTypes;

export default withUsers(AddUser);