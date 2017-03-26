# Synopsis

Advanced React Redux starter Kit should show an possible solution how Application Developer and Ui-Developer can work together in a way that concerns are addressed appropriately. The user interface developer concentrates on the look and feel and creates React Components. The Application developer concentrates on business logic and uses theses React Components and "connects" them with redux

# Motivation

<p>Many teams and projects using React and/or Redux are mixing UI and Application logic. I don't think this is a good idea. Since react and finally redux are born, I think we need a new way to approach Ui and Application logic.</p>

<p>This project should show that it is possible to separate the tasks and address the responsibilities appropriately</p>

# Setup / Installation

Clone the project:

<pre><code>git clone https://github.com/dennisfleischmann/advanced-react-redux-starter-kit.git
cd advanced-react-redux-starter-kit
</code></pre>

Install Packages

Yarn use (recommended)

<code>yarn install</code

npm use

<code>npm install</code

# Usage for UI-Developer, creating, scratching and styling new react components

<p>UI-Developer use the well known @kadira/storybook-ui to "scratch" and create awesome reusable React Components.

<p>To Run the storybook environment just run the following command in the console</p>

<pre><code>npm run storybook </code></pre>

<p>Create new components for the application developer</p>

<code>/src/components/atoms/YOUR_NEW_REACT_ATOM_COMPONENT.jsx</code>

or

<code>/src/components/YOUR_NEW_REACT_COMPONENT.jsx</code>

# Usage for Application Developer, developing business logic

<p>Run the development server and open the page:</p>

<pre><code>npm start
open http://localhost:9000/webpack-dev-server/
</code></pre>

<p>Create new container by using already existing components, created by the UI-Developer</p>

<code>/src/container/YOUR_NEW_CONTAINER.jsx</code>

# Example

In progress...

# License

MIT
