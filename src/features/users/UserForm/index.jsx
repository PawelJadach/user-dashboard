import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Form, Input } from "reactstrap";
import { Button } from "reactstrap";

import styles from "./index.module.scss";

const propTypes = {
    submit: PropTypes.func,
    initialData: PropTypes.object,
};

const UserForm = ({ initialData, submit }) => {
    const history = useHistory();

    const { register, handleSubmit } = useForm({defaultValues: initialData});
    const onSubmit = data => submit({...initialData, ...data });

    const handleCancel = () => {
        history.push("/");
    };

    return (
        <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
                <span className="text-muted">Name</span>
                <Input required innerRef={register} name="name"/>
            </div>
            <div className={styles.input}>
                <span className="text-muted">Email</span>
                <Input required innerRef={register} type="email" name="email"/>
            </div>
            <div className={styles.buttons}>
                <Button onClick={handleCancel} outline color="danger" type="button">Cancel</Button>
                <Button className={styles.success} color="success" type="submit">Submit</Button>
            </div>
        </Form>
    )
};

UserForm.propTypes = propTypes;

export default UserForm;