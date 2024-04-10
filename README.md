# Foruth Enterprise Assessment

Quick Preview: https://weather-app-fourth.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/9473d48e-11e3-47c4-8cda-8d43a3076c78/deploy-status)](https://app.netlify.com/sites/weather-app-fourth/deploys)

Used Tech Stack:
- React
- Typescript
- styled-components
- moment
- vitest

Features:

- Displays the current 5-day weather forecast for the location of the user.
- Allow users to drill into the 3-hour step detail for each day.
- Show details for each day.
- Retrieve a 5-day forecast for a user-specified city.

Available Scripts
In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

`npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run test`

Run all tests and export a coverage folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about (deployment)[https://create-react-app.dev/docs/deployment/] for more information.

With more time I would improve:
- Remove the heavy image from the background and use a color to optimize initial loading.
- Above the main weather information as a background, an image based on the weather type(cloudy, rainy, snowy) could be provided.
- HTTP request caching for optimization could be done with `TanStack Query`.
- Better state management with specific context for the weather data and component state management.
- If more requests are needed adding `axios` is an option.
- Higher test coverage.
