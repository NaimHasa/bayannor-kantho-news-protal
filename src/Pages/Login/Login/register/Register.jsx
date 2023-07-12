import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUserProfile, verifyEmail } = useContext(authContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, password, email, photoURL)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                handleuserUpdateProfile(name, photoURL)
                handleVerifyEmail();
                toast.success('Please verify your email address before login')

            })
            .catch(error => {
                console.error(error)
                setError(error.message);

            }

            );

    }
    const handleuserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            })
    }


    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>photoURL</Form.Label>
                    <Form.Control type="name" name='photoURL' placeholder="Enter photoURL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to='/terms'>Terms and Condition</Link></>}
                    />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Submit
                </Button>
                <Form.Text className='text-danger'>
                    {
                        error
                    }
                </Form.Text>
            </Form>

        </div>
    );
};

export default Register;