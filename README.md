
## Getting Started with Development

Follow these steps to start the development mode for this project:

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js) or yarn (alternative package manager)

### Steps to Start Development Mode

1. Clone the Repository

   ```bash
   git clone https://github.com/sslnyx/ravir-fe.git
   cd ravir-fe
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**
   Start the Vite development server using:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the Application**
   Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

   The development server will watch for changes and automatically reload the application.

### Additional Commands

- **Build for Production:**

  ```bash
  npm run build
  # or
  yarn build
  ```

  This creates a production-ready build in the `dist` directory.

- **Preview Production Build:**

  ```bash
  npm run preview
  # or
  yarn preview
  ```

  This serves the production build locally for testing.

### Notes

- The default port is `5173`. If this port is already in use, Vite will assign a different port automatically.
- Customize the Vite configuration in the `vite.config.js` or `vite.config.ts` file as needed.

---

Happy Coding!

