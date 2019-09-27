import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Components/Image";
import {Container, Row} from 'reactstrap';


export default function PhotoList () {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=i9Vdd6XxmfR8OKIIfVNsqtOI196OtFhVN4YX80hB")
        
            .then(result => {
                const photo = result.data;
                console.log("PIK-CHA!", photo);
                setPhoto(photo);
            })
            .catch(error => {
                console.log("AWE SNAP!", error);
            });
    },[]);

    return (

        <Container>
            <Row>
                <Image title= {photo.title} picture={photo.url} date={photo.date} description={photo.explanation} />
            </Row>
        </Container>

    )
}  