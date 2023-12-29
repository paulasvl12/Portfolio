
import { Avatar, Col, List, Row, Tabs, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import * as React from 'react';
import '../Styles/HeroImageBox.css';


const { Title } = Typography;
const { TabPane } = Tabs;


const dataFrontEnd = [
    {
      title: 'Cool Travel',
      description: 'Mock website for travelling agency. Users can explore cities using Google Maps API.' + 
        ' Built using HTML, CSS, Javascript, Bootstrap', 
       link: 'https://cool-travel.netlify.app/'
    },
    {
      title: 'Volpe Cafe',
      description: 'Mock website for coffee shop. Users can look up popular recipes and rate them.' + 
      ' Built using HTML, CSS, Javascript, PHP, Bootstrap, Spoonacular API',
      link: 'https://volpecafe.netlify.app/'
    },
    {
      title: 'Tic Tac Toe',
      description: 'Users can play a game of tic-tac-toe built with Javascript, HTML, CSS.',
      link: 'https://my-tic-tac-toe-123.netlify.app/'
    },
    {
      title: 'Star Wars',
      description: 'Learn about Star Wars films and their characters.',
      link: 'https://starwarsapiwebsite.netlify.app/'
    },
  ];
  const dataBackEnd = [
    {
        title: 'Shortest Path Game',
        description: 'User can select two points in a grid and a shortest path algorithm will highlight the shortest path to get from point A to B. Additional ' +
          ' features include: expanding grid with custom user input. Built using Java, JavaFX.',
        link: 'https://github.com/paulasvl12/Shortest-Path'
      },
      {
        title: 'Expense Tracker API',
        description: 'Java Spring API where user can create, update, delete their expenses and place them on a certain category to help budgeting.' +
        ' Built using Java, Java Spring, PostgreSQL',
        link: 'https://github.com/paulasvl12/expense-tracker-api'
      }
  ];
  const dataFullStack = [
    {
        title: 'Expense Tracker',
        description: 'Expense Tracker web application using React for frontend and Java Spring, Docker, PostgreSQL for backend.',
        link: 'https://expensetrackerapi-paulaviloria.netlify.app/'
      }
  ];

  const CustomTabs = () => {
    return (
        <div>
        <style>
          {`
            .custom-tabs .ant-tabs-tab {
                font-family: Gill Sans, sans-serif;
                font-size: 20px;
              color: #e0165d;
            },
            .ant-tabs-tab.ant-tabs-tab-active {
                color: #e0165d;
            }
          `}
        </style>
        <Tabs defaultActiveKey="1" tabPosition="top" className="custom-tabs" centered>
          <TabPane tab="Frontend" key="1">
            <List
              itemLayout="horizontal"
              dataSource={dataFrontEnd}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Backend" key="2">
            <Title>Github</Title>
            <p>My backend projects are found in: https://github.com/paulasvl12</p>
            <List
              itemLayout="horizontal"
              dataSource={dataBackEnd}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Full-Stack" key="3">
            <List
              itemLayout="horizontal"
              dataSource={dataFullStack}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  };
  
  export default CustomTabs;