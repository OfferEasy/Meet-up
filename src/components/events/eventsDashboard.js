import React, { Component } from 'react';
import { Row, Col, Calendar } from 'antd';
import Events from './events';
import moment from 'moment';

class EventsDashboard extends Component {
    state = {
        date: ''
    }

    handleDateChange = (date) => {
        this.setState({
            date: moment(date).format("YYYY-MM-DD")
        })
    }

    render() {
        const {date} = this.state;
        return (
            <div>
                <Row>
                    <Col span={15}>
                        <Events
                            date={date}
                        />
                    </Col>
                    <Col span={9}>
                        <Calendar fullscreen={false} onChange={(date) => this.handleDateChange(date)}/>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default EventsDashboard;