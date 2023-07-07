import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsFillBookmarkFill, BsFillEyeFill, BsFillShareFill, BsFillStarFill, } from "react-icons/bs";

const NewsCard = ({ news }) => {
    // console.log(news);
    const { author, title, rating, _id, total_view, details, image_url } = news;
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
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=' d-flex justify-content-between align-items-center'>
                    <div>
                        <BsFillStarFill className='text-warning me-2'></BsFillStarFill>
                        <span>{rating.number}</span>


                    </div>
                    <div >
                        < BsFillEyeFill className='me-2'></BsFillEyeFill>
                        <span>{total_view}</span>


                    </div>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default NewsCard;