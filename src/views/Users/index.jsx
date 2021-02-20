import React from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withUsers } from "../../hoc/withUsers";

import UsersTable from "../../features/users/UsersTable";
import Card from "../../components/Card";

const UsersPage = () => {
    const history = useHistory();

    const error = useSelector(state => state.users.error);

    const handleAdd = () => {
        history.push("/add");
    };

    return (
        <div>
            {error ? (
                <code>Error occure {error}</code>
            ) : (
                <Card title="Users" button={{ text: "Add new", action: handleAdd }}>
                    <UsersTable />
                </Card>
            )}
        </div>
    );
};

export default withUsers(UsersPage);