# react-weather

A React app.

The app uses Redux, Open Weather Map API and Google Maps API to create a weather forecast app.

## App description

The app uses the Redux predictable state container for JavaScript apps, Open Weather Map API to featch 5 day forecast and Google Maps API to display a map of the city.

## Installation

Be sure to have NodeJS installed.

### Prerequisites:
```
1. You must have nodejs installed.
2. It is recommended to have create-react-app installed.
3. You must have a Google API Key.
4. You must have an Open Weather Map API Key.
```

### To install the prerequisites (macOS only)
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node

3. Install create-react-app:

    npm install -g create-react-app
```

### To obtain the pre required API keys
```
1. Google API Key:

    follow the instructions on https://developers.google.com/maps/documentation/javascript/get-api-key#step-1-get-an-api-key-from-the-google-cloud-platform-console

2. Open Weather Map API Key:

    visit https://openweathermap.org/ and create an account.
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/react-weather.git ~/Desktop/react-weather

2. Navigate to where you cloned the project:

    cd ~/Desktop/react-weather

3. Install App local packages:

    npm install

4. Add your Google API Key to:

    Desktop/react-weather/public/index.html

5. Add your Dark Sky API Secret Key to:

    Desktop/react-weather/src/actions/index.js
```

## Run the App
```
- Start the server:

    npm start
```

# Disclaimer:

This app is for demo purposes only.
