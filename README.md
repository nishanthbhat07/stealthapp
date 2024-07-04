# Stealth App

## Setup
1. Clone the repo `git clone https://github.com/nishanthbhat07/stealthapp.git`
2. After cloning, `cd stealthapp` and install node_modules by doing `yarn`

###  IOS
1. Once node_modules are installed, we need to install all the pods related to the project. For doing this you can do either of the following:
	a. npx pod-install
	b. `cd ios && pod install && cd..`
2. After installing pods, run the following command to make an IOS build on simulator: `yarn ios`. And also open a new terminal to start the metro server `yarn start`

## Android
1. For build android build, use the following command: `yarn android`. And also open a new terminal to start the metro server `yarn start`


## Libraries Used
- Expo Image -  for rendering images
- Expo Router - for Screen routing
- Reanimated -  for animations
- Gesture handler - For tracking and making the components movable
- Fonts used - Space grotesk and Roboto

APK link --   [App](https://drive.google.com/file/d/1Dfz4ZppuFUhTU-v4Ut-Y-fqvRKKefjHL/view?usp=sharing)
