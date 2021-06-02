import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class dashboard extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Dashboard Page</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>dashboard 1</ListGroup.Item>
                            <ListGroup.Item>dashboard 2</ListGroup.Item>
                            <ListGroup.Item>dashboard 3</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default dashboard;