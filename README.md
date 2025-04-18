# Bike Servicing Management System

Welcome to the backend repository for the Bike Servicing Management System. This application is designed to streamline and manage the entire bike servicing process. Users can track the status of their bikes, and receive updates, making bike maintenance more convenient and efficient.

## ✨ Features

- 🌐 **RESTful API:** Provides endpoints for customer, bike, service record and more.

- 🛠️ **CRUD Operations:** Full support for creating, reading, updating, and deleting service.

- 🔒 **Secure Environment:** Securely manage environment variables with dotenv.

- 📦 **Error Handling:** Comprehensive error responses for better debugging and API usage.

- ⚙️ **Scalable Design:** Built to handle growing demands and datasets.

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

## ⚙️ Installation and Setup

Follow these steps to set up and run the backend server locally:

### Prerequisites

- **Node.js** (v14 or higher)

### Clone the Repository

```bash
git clone https://github.com/AthkiaAdiba/l2-assignment-8
cd l2-assignment-8
```

### Install Dependencies

```bash
yarn install
```

### Configure Environment Variables

Create a `.env` file in the root directory with the following structure:

```bash
DATABASE_URL=your_transaction_pooler_url_of_supabase
DIRECT_URL=your_session_pooler_url_of_supabase
PORT=5000
```

### Run the Server

#### Development Mode

```bash
yarn dev
```

#### Production Mode

```bash
yarn build
yarn prod
```

## 🔗 Scripts

- `yarn dev`: Starts the development server with hot reloading.

- `yarn prod`: Starts the production server.

- `yarn build`: Compiles TypeScript into JavaScript.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`)
4. Push your changes (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the **ISC License**.

## 📞 Contact

For any queries or feedback, feel free to reach out:
Email: athkiaadiba@gmail.com
