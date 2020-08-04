# Plantiful

[![Build Status](https://travis-ci.com/quanganhhoang/study-roadmap-prod.svg?branch=master)](https://travis-ci.com/quanganhhoang/study-roadmap-prod)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Plantiful is an e-commerce web application created with create-react-app and firebase.

Technology stack: React, Firebase.

Sneak peek: https://plantifully.herokuapp.com/

<!-- Youtube:

[![App Walkthrough](https://img.youtube.com/vi/qOQQJRNF9P4/0.jpg)](https://youtu.be/qOQQJRNF9P4) -->
    

### Testing

Installing test libraries (jest & enzyme)

    npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

    npm i --save-dev enzyme enzyme-adapter-react-16

## TODO:
- ~~Deploy to Heroku~~
- Update plant images
- Update plant information
- Optimize build with React memo
- Tests


## Deployment on Heroku

Create Heroku app

    heroku create <name_of_your_app> --buildpack https://github.com/mars/create-react-app-buildpack.git


Check configuration

    heroku config --app <name_of_your_application>


Push it!

    git push heroku master


## Authors

* **QA Hoang**


## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details


## Acknowledgments
