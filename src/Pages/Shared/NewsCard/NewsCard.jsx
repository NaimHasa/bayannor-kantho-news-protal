import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsFillBookmarkFill, BsFillShareFill, } from "react-icons/bs";

const NewsCard = ({ news }) => {
    console.log(news);
    const { author, title, thumbnail_url, _id, details, image_url } = news;
    return (
        <CardGroup className='mb-5'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='me-2' roundedCircle src={author.img} style={{ height: '60px ' }}></Image>
                        <div>
                            <p className='mb-0'>{author.name}</p>
                            <p><small>{author.published_date}</small></p>
                        </div>
                    </div>

                    <div>
                        <BsFillBookmarkFill className='me-2'></BsFillBookmarkFill>
                        <BsFillShareFill></BsFillShareFill>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 250 ?
                            <p>{details.slice(0, 250) + '....'}
                                <Link to='/news/${_id}'>Read More</Link></p>
                            :
                            <p>{details}</p>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default NewsCard;