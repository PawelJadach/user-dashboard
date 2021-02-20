import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Table, Button } from "reactstrap";
import UserRemoveModal from "../UserRemoveModal";
import { useHistory } from "react-router-dom";

import styles from "./index.module.scss";

const UsersTable = () => {
    const history = useHistory();
    const [sort, setSort] = useState(true);

    const [idToRemove, setIdToRemove] = useState(null);
    const users = useSelector(state => state.users.users);

    const handleRemove = id => () => {
        setIdToRemove(id);
    };

    const handleEdit = id => () => {
        history.push(`/edit/${id}`);
    };

    const sortedAZ = [...users].sort((a, b) => a.name > b.name ? 1 : -1);
    const sortedZA = [...users].sort((a, b) => a.name < b.name ? 1 : -1);

    const usersToShow = sort ? sortedAZ : sortedZA;

    return (
        <>
            {users.length > 0
                ? <Table responsive={true} striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name {
                                sort
                                    ? <span className={styles.sort} onClick={() => setSort(false)}>↑</span>
                                    : <span onClick={() => setSort(true)} className={styles.sort}>↓</span>
                                }
                            </th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && usersToShow.map(user =>
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user?.name}</td>
                                <td>{user?.username}</td>
                                <td>{user?.email}</td>
                                <td>{user?.address?.city}</td>
                                <td><Button color="warning" onClick={handleEdit(user.id)}>Edit</Button></td>
                                <td><Button color="danger" onClick={handleRemove(user.id)}>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                : <h3 className={styles.empty}>Users not found</h3>
            }
            <UserRemoveModal id={idToRemove} toggle={() => setIdToRemove(null)} />
        </>
    )
};


export default UsersTable;