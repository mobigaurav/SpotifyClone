React Native App
Setup a new Expo project
Let’s start by creating a new React Native application using Expo. We will use the Navigation (TypeScript) template, which comes with Expo Router configures, and a couple of sample screens.

npx create-expo-app@latest SpotifyClone -t
After the project is initialized, let’s open it up in our editor of choice.

Open a terminal, and start the development server with npm start

The next step is to run our app on a device. The easiest way is to download the Expo Go app (available both on Play Market and App Store), and then scan the QR you see in the terminal. That way, you can continue to develop the app and see the hot updates directly on your device.

Optionally, you can run the app on an iOS Simulator by pressing i or on Android Emulator by pressing a. But for this, you have to set up the emulators using Xcode and/or Android Studio.

Clean the template
Let’s clean up a bit the default template to make our work easier later.

Move the folders app, components, and constants inside a new src directory to keep everything close together.
Fix all the imports
Copy and paste the types.ts file from the asset bundle to your project src/types.ts
Remove unused components

