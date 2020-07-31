# Basic SPA

[![Maintainability](https://api.codeclimate.com/v1/badges/5e37932c610a83213715/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/labs-spa-starter/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5e37932c610a83213715/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/labs-spa-starter/test_coverage)

> **Disclaimer:** This application is currently in Alpha (as of June 08, 2020) and is not ready for production. Please use at your own risk as things will change almost daily.

- Welcome to your `Basic Single Page Application Repository`. Use this to start your own Greenfield Project using ReactJS and common industry standards.

- This repository assumes a handful of industry practices and standards. We strive to keep you on the bleeding edge of the industry and as a result, we have made some opinions for you so that you don't have to; you're welcome.

- The following was built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) for base boiler-plating. We will maintain the dependencies as according to their specifications as an Engineering Organization.

## StoryBook

- All of the reusable components for this repository can be [found here using a Storybook](https://lambda-school-labs.github.io/labs-spa-starter/?path=/story/form-button--basic-usage).
- For more information on contributing to our Storybook for this application [you can see here](./src/stories/README.md).

## Requirements

- [Labs Engineering Standard requirements found here](https://labs.lambdaschool.com/topics/node-js/)

## Getting Started

### Environment variables

- `REACT_APP_CLIENT_ID` Okta client id
- `REACT_APP_OKTA_ISSUER_URI` Okta api authorization server issuer uri (eg. `https://name-438r8hr.okta.com/oauth2/default`)
- `REACT_APP_API_URI` The URL (localhost or live) for the Backend that you're building

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to your to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Deploying Your App

- We recommend you deploy this project using [AWS amplify](https://aws.amazon.com/amplify/). You can find a step-by-step deployment guide [here](./DEPLOYMENT_GUIDE.md).

## Components

- We feel that you shouldn't have to spend time as a developer worrying about where your files should go and your architectural decisions that you'd have to make if you started from scratch.
- Following the patterns we've laid out for your and the definitions of 'components' will help you focus on getting work done, rather than spending time deliberating on 'how' your work will get done.
- Please see [the following documentation](./src/components/README.md) on how to work with and structure your components in this app.

## Styling Your App

- In order to provide an experience for you to dive right into a code base and have everything you need to successfully style and craft your UI Components we'd like for you to gain some practice using the [`ANT Design Library`](https://ant.design/).

- Instructions on how to use components.

## Data Visualization - Working with Hybrid Teams

- We have provided and example of a simple Plot Charting component that can be built, configured, and delivered for your use by the Data Science Team.
- We strongly urge you to work in constant collaboration with the data scientists in order to pull in their work into your application, ensure that their work matches the theme and style of your team's application, and that the data you pull in represents what problem that team was trying to solve. **This will be a process that requires work and dedication and give-and-take.**
- **Example Components**: [Please see here for an example](./src/components/pages/ExampleDataViz/README.md) of how to work w/ `Plotly.js` and `React-Plotly.js`.

## Testing your App.

- In accordance with our [Labs Engineering Standards](https://labs.lambdaschool.com/) this app uses common practices for Unit/Integration Testing using:
  [React Testing Library](https://github.com/testing-library/react-testing-library)
  [Jest](https://jestjs.io/)
- For examples on how to test your application and more information please see [the following documentation](./src/__tests__/README.md).

## Contributing

- As this repository is a Work In Progress (WIP) we'd love to hear more about what is working for you and what could be improved. [Please use the `Issues` tab in Github](https://github.com/Lambda-School-Labs/labs-spa-starter/issues) to submit and file any issues that come up during your development cycle. Issues should be related to things like, documentation, bugs that come up with the existing flow, architectural discussion, suggestions for improvements, and anything that you find cumbersome about getting started and working through a product cycle using these tools.
- **Please use `Labels` when filing issues** try and include screenshots of bugs and steps to reproduce.
