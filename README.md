# EasyList

**EasyList** is a web application designed to help people with disabilities easily plan and manage their shopping using pictograms. The frontend is built with Angular for a responsive and user-friendly interface, and the backend is powered by Django Rest Framework (DRF) to provide a robust API for managing shopping lists and items.

## Features

- Create and manage shopping lists using pictograms
- Organize items into categories for easier navigation
- Customizable shopping lists for different stores or trips
- Mobile-friendly interface for use while shopping

## Technology Stack

- **Frontend**: Angular
- **Backend**: Django Rest Framework (DRF)
- **Database**: SQLite / PostgreSQL (or any other database of your choice)
- **API**: RESTful API for communication between frontend and backend
- **Authentication**: Django authentication (optional for user login)

## Installation

### Backend (Django + Django Rest Framework)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/easylist.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd easylist/backend
   ```

3. Create and activate a virtual environment:

   ```bash
   python3 -m venv env
   source env/bin/activate
   ```

4. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Set up the database and apply migrations:

   ```bash
   python manage.py migrate
   ```

6. (Optional) Create a superuser to access the Django admin:

   ```bash
   python manage.py createsuperuser
   ```

7. Run the Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend (Angular)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the required Angular dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200` to view the application.

### Backend-Frontend Communication

Make sure to configure CORS in your Django settings so that the Angular frontend can communicate with the Django backend. To enable CORS, follow these steps:

1. Install `django-cors-headers`:

   ```bash
   pip install django-cors-headers
   ```

2. Add `corsheaders` to your `INSTALLED_APPS` and middleware in `settings.py`:

   ```python
   INSTALLED_APPS = [
       'corsheaders',
       ...
   ]

   MIDDLEWARE = [
       'corsheaders.middleware.CorsMiddleware',
       ...
   ]

   CORS_ORIGIN_ALLOW_ALL = True  # For development only, use specific domains in production
   ```

## Usage

1. In the frontend, users can create a shopping list by selecting pictograms representing various items.
2. The frontend sends requests to the Django API to save and retrieve shopping lists.
3. The lists are categorized, and users can mark items as purchased during their shopping trip.

## API Endpoints

The backend exposes the following API endpoints for managing shopping lists and items:

- `GET /api/lists/`: Retrieve all shopping lists
- `POST /api/lists/`: Create a new shopping list
- `GET /api/lists/:id/`: Retrieve a specific shopping list
- `PUT /api/lists/:id/`: Update a specific shopping list
- `DELETE /api/lists/:id/`: Delete a specific shopping list
- `GET /api/items/`: Retrieve all items
- `POST /api/items/`: Create a new item
- `GET /api/items/:id/`: Retrieve a specific item
- `PUT /api/items/:id/`: Update a specific item
- `DELETE /api/items/:id/`: Delete a specific item

## Contributing

Feel free to contribute to **EasyList** by opening issues or submitting pull requests. We welcome any improvements, especially those enhancing accessibility or adding new features.

## License

This project is licensed under the MIT License.

## Contact

- Pascal Nehlsen - [LinkedIn](https://www.linkedin.com/in/pascal-nehlsen) - [mail@pascal-nehlsen.de](mailto:mail@pascal-nehlsen.de)
- Project Link: [https://github.com/PascalNehlsen/easylist](https://github.com/PascalNehlsen/easylist)
