import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "../../../bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Book = () =>{
    const url = "https://api.itbook.store/1.0/search/mongodb";
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    const getDBookData = () =>{
        axios.get(url).then((response) => {
        console.log(response.data.books);
        setBooks(response.data.books);
        })
    }

    useEffect(()=>{
        getDBookData();
    }, [])

    return (
        <div className="container">
            <Container>
                <Row> 
            {
                books.length > 0 ? 
                books.map((book) => (
                <Col sm={4}>
                    <Card className="text-center" style={{ width: '18rem' }} >
                        <Card.Img sizes="18rem" variant="top" src={book.image}></Card.Img>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text variant="warning">
                                {book.price}
                            </Card.Text>
                        </Card.Body>

                        <Button onClick={() => {navigate("/book/" + book.isbn13)}} variant="warning">Detail</Button>
                    </Card>
                </Col>
                )) : <div>no books</div>
            }
            </Row>
            </Container>
        </div>
    )
}

export default Book;