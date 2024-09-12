# Chart Application

This Project contains a Django backend and a Next.js frontend. Follow the instructions below to set up and run both the backend and frontend locally.

## Prerequisites

Before getting started, ensure that you have the following installed:

- **Python 3.8+** for the Django backend
- **Node.js 16+** for the Next.js frontend
- **npm** (comes with Node.js) or **yarn** for managing JavaScript dependencies
- **pip** for managing Python dependencies

---

## Getting Started

### To run the Project Using Docker

Have docker installed on your machine.
```bash

docker-compose up --build

```
Then open up ```http:\\localhost:3000``` on your browser
## Brief Explanation of the Approach and Thought Process

### 1. Project Structure and Architecture

The project is divided into two primary components: the **frontend** using Next.js and the **backend** using Django. This clear separation of concerns enables modularity, scalability, and flexibility. This architecture allows both parts to evolve independently, promoting long-term maintainability.

### 2. Frontend Approach (Next.js)

For the frontend, I opted to use **Next.js** to build various charts:

- **Bar, Pie, and Line Charts**: I utilized the **Recharts** library because it offers prebuilt, customizable components for these chart types, allowing rapid development.
- **Candlestick Chart**: Since **Recharts** doesn’t support candlestick charts, I integrated **React-ApexCharts**, a versatile library well-suited for advanced chart types.

Additional Features:
- I implemented interactive features such as **zoom**, **tooltips**, and **hover information** to enhance the user experience.
- State management is handled via **Redux**, ensuring a scalable and predictable way to manage the application’s state.
- The dashboard utilizes a **responsive grid-based design**, adapting to different screen sizes to ensure an optimal viewing experience across devices.
- The entire frontend is written in **TypeScript** to improve code quality, reducing the chances of type errors and enhancing development efficiency.

### 3. Backend Approach (Django API)

For the backend, I chose **Django** in combination with the **Django REST Framework (DRF)** to handle the API logic. Key backend decisions include:

- I created **four distinct API endpoints** to serve data for each chart type, ensuring a clean separation of data concerns.
- Using **api_view** from DRF provided an easy way to manage request types (GET, POST) and allowed quick iteration during development.
- DRF's built-in tools also facilitated efficient **error handling** and **debugging**.
- To ensure reliability, I wrote **unit tests** for each API endpoint, guaranteeing that the APIs behave as expected and are free from regressions during future updates.

### 4. Data Fetching and Error Handling

Data fetching from the API is done using **Axios** on the frontend. Key considerations include:

- **Error Handling**: If an API request fails, a user-friendly error message is displayed on the dashboard to maintain a smooth user experience.
- **Loading Indicators**: To enhance the user experience, **loading spinners** are displayed while waiting for data from the API, ensuring that users are informed of the current state of the application.

### 5. UI/UX Considerations

- The dashboard features a **dark-themed design** with a clean and simple layout, putting the focus on data visualization.
- All charts are designed to be **responsive**, dynamically adjusting to different screen sizes for an optimal user experience on desktops, tablets, and mobile devices.
- Thoughtful UX elements like zoom and tooltips further enhance interaction with the charts, making the data more accessible and actionable.

---

## Libraries and Tools Used

- **Next.js**
- **Recharts**
- **React-ApexCharts**
- **Django REST Framework (DRF)**
- **Axios**
- **Redux**
- **TypeScript**
