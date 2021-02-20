import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/users/usersSlice";

export const withUsers = Component => {
    const UserComponent = ({ ...props }) => {
        const dispatch = useDispatch();
        const users = useSelector(state => state.users.users);

        useEffect(() => {
            if (!users) {
                dispatch(getUsers());
            }
        }, []); //eslint-disable-line

        return users ? <Component users={users} {...props} /> : <p>Loading</p>;
    };

    return UserComponent;
};