import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { BsGoogle, BsGithub, BsFacebook, BsYoutube, BsTwitter, BsDiscord, BsWhatsapp } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandPromotion from '../BrandPromotion/BrandPromotion';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { ProviderLogin } = useContext(authContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (

        <div className="d-grid gap-1" >
            <Button onClick={handleGoogleSignIn} variant="primary" >
                <BsGoogle></BsGoogle> <strong>LogIn With Google</strong>
            </Button>
            <Button variant="dark">
                <BsGithub></BsGithub> <strong>LogIn With Github</strong>
            </Button>

            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-4'><BsFacebook />  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><BsYoutube />  Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><BsTwitter />  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><BsWhatsapp />  WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-4'><BsDiscord />  Discord</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h5>Google Ads</h5>
                <BrandPromotion></BrandPromotion>
            </div>

        </div>
    );
};

export default RightSideNav;