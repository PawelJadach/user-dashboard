import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { removeUserById } from "../usersSlice";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const propTypes = {
    id: PropTypes.number,
    toggle: PropTypes.func,
};

const UserRemoveModal = ({ id, toggle }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeUserById(id));

        toggle();
    };

    return (
        <Modal
            isOpen={id !== null}
            toggle={toggle}
            color="danger"
        >
            <ModalHeader>Delete user</ModalHeader>
            <ModalBody>
                <p>Are you sure you want to delete the user with id: {id}?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={handleRemove}>Delete</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
};

UserRemoveModal.propTypes = propTypes;

export default UserRemoveModal;