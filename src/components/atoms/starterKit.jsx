import React from 'react';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

const StarterKit = (
  <Grid>
    <Row>
      <Col xs={12} md={12}>
        <Jumbotron>
          <h1>Advanced React Redux Starter Kit</h1>
          <ul>
            <li>Atomic Design approach</li>
            <li><code>Separation</code> between Application and UI-Developer</li>
            <li>Test Driven Development in mind</li>
            <li>Webpack + Webpack-Dev-Sever</li>
            <li>React <code>Storybook-Ui</code> already in place</li>
            <li>Eslint configuarion <code>airbnb</code></li>
            <li>Source-Map</li>
          </ul>
          <p><small>by Dennis Fleischmann</small></p>
        </Jumbotron>
      </Col>
    </Row>
  </Grid>
);

export default () => (StarterKit);
