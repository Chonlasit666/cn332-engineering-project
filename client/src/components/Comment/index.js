import React, { Component, useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Comment = (props) => {

    const [comments, setComments] = useState([]);
    const [isCollapse, setIsCollapse] = useState(false);
    const [countComment, setCountComment] = useState('no comment')



    /* constructor(props) {
        super(props);
        console.log(props)
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
 */
    useEffect(() => {

        setComments(props.comments);
        console.log(comments.length);
        var len = props.comments.length;
        console.log(len)
        if(len != 0){
            setCountComment(comments.length + " comments");
        }
        
    }, [countComment]);

    const handleToggle = () => {
        setIsCollapse(prevToggle => !prevToggle);
    }

    return (
        <div>
            {/* <Button color="primary" onClick={handleToggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
            <Badge bg="primary" onClick={handleToggle} style={{ marginBottom: '1rem' }}>
                
                {countComment}
            </Badge>
            <Collapse isOpen={isCollapse}>
                <ListGroup as="ol">
                    {comments.map((cmt, index) => (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start justify-content-end"
                        /* key={index} */
                        >
                            <Card>
                                this is comment id {cmt}
                            </Card>
                        </ListGroup.Item>
                    )
                    )}
                </ListGroup>

            </Collapse>
        </div>
    );
}


export default Comment;