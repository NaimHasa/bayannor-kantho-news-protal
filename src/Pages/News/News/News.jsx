import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    // console.log(news);
    const { image_url, title, details } = news;

    return (
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>
                    <h3><strong>{title}</strong></h3>
                </Card.Title>
                <Card.Text>
                    <>{details}</>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
};

export default News;