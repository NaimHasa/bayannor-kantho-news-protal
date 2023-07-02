import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsGoogle, BsGithub, BsFacebook, BsYoutube, BsTwitter, BsDiscord, BsWhatsapp } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandPromotion from '../BrandPromotion/BrandPromotion';


const RightSideNav = () => {
    return (

        <div className="d-grid gap-1" >
            <Button variant="primary" >
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