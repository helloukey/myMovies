
# myMovies

myMovies is a complete MERN stack progressive web app (PWA) for everything related to Movies, Shows, and Artists. The movie database is taken from my [TMDB](https://www.themoviedb.org/) API and built using technologies including [ReactJS](https://reactjs.org/), [ReduxJS/Toolkit](https://redux-toolkit.js.org/), [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [NodeJS](https://nodejs.org/), [ExpressJS](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).

## Features

- Progessive Web App (PWA)
- Search Movies, Shows, and Artists
- Complete Details of Movies, Shows, and Artists
- Watch Trailers
- Browse Backdrops and Posters
- Add to Liked and Watch Later Collection

## Preview

![preview-mymovies](https://user-images.githubusercontent.com/43317360/206182064-de4727e2-20d3-4609-8faa-93d0795ff7dc.jpg)

## Installation & Setup

- First, download or clone this repo, and then run the command given below to install all the required dependencies.

```bash
  npm install-client && install-server
```

- Rename the `.env_sample` file to `.env` inside `server` folder.

- Get TMDB API Key from **[HERE](https://developers.themoviedb.org/3)** and MongoDB connection URI from **[HERE](https://www.mongodb.com/)**

- Provide your **MONGODB_URI**, **JWT_SECRET_KEY**, **PORT**, **BASE_URL**, and **API_KEY** inside the `.env` file.

- Rename the `.env_sample` file to `.env` inside `client` folder.

- Provide your **REACT_APP_BACKEND_URL** inside the `.env` file.

- Run `npm start-server && start-client` from the root folder.

- Finally, Preview this project locally by visiting the URL: `localhost:<PORT number>`

## Docker Compose

- Run the project in docker container using:
  ```docker compose up -d --build```
- Stop the docker container using:
  ```docker compose down```

## License

[![license](https://img.shields.io/github/license/helloukey/mymovies?style=for-the-badge)](LICENSE)