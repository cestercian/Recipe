# Ingredient List Application

This is a simple React application that allows users to add ingredients to a list and generates a prompt to create a recipe once a certain number of ingredients have been added.

## Features

- **Add Ingredients**: Users can add ingredients to a list.
- **Ingredient Validation**: Checks if an ingredient is already added and ensures the input is valid.
- **Recipe Prompt**: If more than three ingredients are added, users can generate a recipe based on their ingredients.

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/<your-username>/<repository-name>.git
    cd <repository-name>
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Structure

- **src/**
  - **Main.js**: Contains the main logic for adding ingredients and rendering the ingredient list.
  - **App.js**: Entry point of the application (includes `Main.js`).
  - **styles.css**: Styles for the application (optional if you want to add your own).

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: React's DOM package for web applications.
