# CRUD API Project

This is a simple CRUD (Create, Read, Update, Delete) API project built using Node.js, Express.js, and MongoDB. It allows you to perform basic operations on products such as creating, reading, updating, and deleting products.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Example Requests](#example-requests)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- MongoDB installed and running.
- A code editor of your choice (e.g., Visual Studio Code).
- Git installed for cloning the repository.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/avinashhere017/NODE-API.git
    ```

2. Change into the project directory:

    ```bash
    cd NODE-API
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the project root and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://username:password@your-mongodb-host/your-database-name
    ```

## Usage

To run the application, execute the following command:

```bash
npm start
```
The API will start running on port 3000 by default. 
You can access it via `http://localhost:3000`.

## Endpoints

1. **Get All Products**
    - **URL:** `/products`
    - **HTTP Method:** GET
    - **Description:** Retrieves a list of all products.

2. **Get a Single Product**
    - **URL:** `/products/:id`
    - **HTTP Method:** GET
    - **Description:** Retrieves a single product by its ID.

3. **Create a Product**
    - **URL:** `/products`
    - **HTTP Method:** POST
    - **Description:** Creates a new product.

4. **Update a Product**
    - **URL:** `/products/:id`
    - **HTTP Method:** PUT
    - **Description:** Updates a product by its ID.

5. **Delete a Product**
    - **URL:** `/products/:id`
    - **HTTP Method:** DELETE
    - **Description:** Deletes a product by its ID.

## Example Requests

Here are some example requests you can make to interact with the API using a tool like Postman or by using `curl`:

- **Get All Products**
    ```http
    GET http://localhost:3000/products
    ```

- **Get a Single Product**
    ```http
    GET http://localhost:3000/products/1
    ```

- **Create a Product**
    ```http
    POST http://localhost:3000/products
    Content-Type: application/json

    {
      "name": "New Product",
      "quantity": 10,
      "price": 19.99,
      "image": "product.jpg"
    }
    ```

- **Update a Product**
    ```http
    PUT http://localhost:3000/products/1
    Content-Type: application/json

    {
      "name": "Updated Product",
      "quantity": 5,
      "price": 24.99,
      "image": "updated-product.jpg"
    }
    ```

- **Delete a Product**
    ```http
    DELETE http://localhost:3000/products/1
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

