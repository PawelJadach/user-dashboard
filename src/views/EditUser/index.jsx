import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editUser } from "../../features/users/usersSlice";
import { withUsers } from "../../hoc/withUsers";

import UserForm from "../../features/users/UserForm";
import Card from "../../components/Card";


const propTypes = {
    users: PropTypes.array,
};

const EditUser = ({ users }) => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    const userToEdit = users.find(user => user.id === parseInt(id));

    const handleSubmit = async data => {
        const success = await dispatch(editUser(data));

        if(success) {
            history.push("/");
        }
    };

    return userToEdit ? (
        <Card title="Edit user">
            <UserForm initialData={userToEdit} submit={handleSubmit} />
        </Card>
    ) : <Redirect to="/" />;
};

EditUser.propTypes = propTypes;

export default withUsers(EditUser);