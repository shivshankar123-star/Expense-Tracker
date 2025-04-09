# Expense Tracker

An intuitive and simple Expense Tracker built with React to help you manage and track your daily expenses. The app allows users to add, and delete their expenses, while displaying a summary of the total expenses and a breakdown by categories.

## Features

- **Submit**: Allows the user to input expense details including description, amount, and category.
- **Delete**: Remove an expense from the list.
- **Expense summary**: Displays the total amount of expenses and breaks them down by category.
- **Responsive design**: Works on both desktop and mobile devices.
- **Weather display**: Display weather details of Aberdeen city, because I have hard coded this for practice purposes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Hooks**: Used for managing state and side effects.
- **CSS**: Used for styling the components.

## Getting Started

To get a copy of the project running on your local machine for development and testing, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed (you can check this by running `node -v` in your terminal).
- [npm](https://www.npmjs.com/) installed (it comes with Node.js).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. **Navigate into the project folder**:

   ```bash
   cd expense-tracker
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:5173/` to view the app.

### Build for Production

To create a production-ready version of the app, run:

```bash
npm run build
```

This will create a `build` folder with all the static files needed to deploy your app.

## Usage

1. **Add an Expense**:
   - Enter the description, amount, and category of the expense.
   - Click on **Submit** to save it to the list.

2. **Delete an Expense**:
   - Click on the **Delete** button next to any expense to remove it from the list.

3. **Expense Summary**:
   - View the total amount of your expenses and a breakdown of expenses by category.

## Screenshots

<img src='./src/assets/Expense Tracker.webp' alt='screenshot of expense tracker app'>

## Future Enhancements

- **User authentication**: Allow users to create accounts and sign in to save their data in the cloud.
- **Categories**: Allow users to create custom categories for their expenses.
- **Currency Support**: Implement multiple currencies for international users.
- **Edit**: Allow users to edit expenses.
- **Storage**: Add local storage / backend to store large data.

## Contributing

If you'd like to contribute to the development of this project, feel free to fork the repository and submit a pull request. Please ensure that your changes pass all tests and follow the coding style used in the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React team for creating a powerful and easy-to-use framework.
- The open-source community for various resources and libraries.