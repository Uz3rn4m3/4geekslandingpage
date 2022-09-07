import React, { useState } from "react";
import { CardLink } from "react-router-dom";

const Card = () => {
    const [isOpen, setOpen] = useState(false);
    return(
        <Card style={{width: '18rem' }}>
            <Card.img variant="top" src='holder.js/500x325' />
            <Card.body>
                <Card.title>Card Title</Card.title>
                <Card.text>
                    
                </Card.text>
                <button className="btn btn-primary">Find Out More</button>
            </Card.body>
        </Card>
         );
    }
    export default Card;