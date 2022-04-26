import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../../bootstrap.min.css";

const BookDetail = () =>{
    const [book,setBook] = useState([]);
    let params = useParams();

    const getBookDetail = (isbn) =>{
    const url = "https://api.itbook.store/1.0/books/" + isbn;
    axios.get(url).then((response)=>{
        console.log(response);
        setBook(response.data);
    });
    }

    useEffect(()=>{
        getBookDetail(params.isbn);
    }, []);

    return(
        <Container>
            <Card>
                <Card.Title>
                    <Card.Title className="text-center"><h1>{book.title}</h1></Card.Title>
                </Card.Title>
                <Card.Img sizes="20rem" src={book.image}></Card.Img>
                <Card.Body>
                    <Card.Text>
                        {book.desc}
                    </Card.Text>
                    <Table>
                        <tr>
                            <td>Author : </td>
                            <td>{book.authors}</td>
                        </tr>
                        <tr>
                            <td>Language : </td>
                            <td>{book.language}</td>
                        </tr>
                        <tr>
                            <td>Pages : </td>
                            <td>{book.pages}</td>
                        </tr>
                        <tr>
                            <td>Publisher : </td>
                            <td>{book.publisher}</td>
                        </tr>
                        <tr>
                            <td>Rating : </td>
                            <td>{book.rating}</td>
                        </tr>
                        <tr>
                            <td>Year : </td>
                            <td>{book.year}</td>
                        </tr>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BookDetail;