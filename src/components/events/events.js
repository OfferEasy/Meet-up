import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { List, Avatar, Space, Spin } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { fetchEvents } from '../../redux/events/actions';
import { fetchHosts } from '../../redux/hosts/actions';

const mapStateToProps = (state) => {
    return {
        ...state.EventReducer,
        ...state.HostsReducer
    }
}

class Events extends Component {

    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchHosts();
    }

    componentWillReceiveProps(nextProps) {
       if (nextProps.date !== this.props.date) {
        this.props.fetchEvents({date: nextProps.date})
       }
    }

    render() {
        const { events, hosts, loading } = this.props;
        let eventsData = [];

        if (events && hosts) {
            for (const event of events) {
                for (const host of hosts) {
                    if (event.id == host.eventId) {
                        eventsData.push({
                            ...event,
                            hostName: host.name,
                            hostURL: host.photoUrl
                        })
                    }
                }
            }
        }

        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );

        const extraPic = (category) => {
            if (category === 'travel') {
                return (
                    <img
                        width={300}
                        height={170}
                        alt="logo"
                        src="/img/travel.jpg"
                    />
                )
            } else if (category === 'culture') {
                return (
                    <img
                        width={300}
                        height={170}
                        alt="logo"
                        src="/img/culture.jpg"
                    />
                )
            } else if (category === 'food') {
                return (
                    <img
                        width={300}
                        height={170}
                        alt="logo"
                        src="/img/food.jpg"
                    />
                )
            } else if (category === 'music') {
                return (
                    <img
                        width={300}
                        height={170}
                        alt="logo"
                        src="/img/music.jpg"
                    />
                )
            } else if (category === 'film') {
                return (
                    <img
                        width={300}
                        height={170}
                        alt="logo"
                        src="/img/film.jpg"
                    />
                )
            }
        }

        return (
            <div>
            {
                this.props.loading ? 
                <Spin size="large"/> : 
                <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={eventsData}
                footer={
                    <div>
                        Let's <b>Meet Up!</b>
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            extraPic(item.category)
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.hostURL} />}
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            }
            </div>
        )
    }
};

export default connect(mapStateToProps, { fetchEvents, fetchHosts })(Events);