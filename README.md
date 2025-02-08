## Step 1: Clone & Navigate to the Project

```sh 
git clone https://github.com/stv707/docker-build
cd docker-build


```

## Step 2: Build and Start Containers

```sh 

docker-compose up -d --build 

```

## Step 3: Open the Application
- Frontend: Open http://localhost:3000
- Backend: Open http://localhost:5000/api/message
- MongoDB: Connect via any MongoDB client on mongodb://localhost:27017/studentdb