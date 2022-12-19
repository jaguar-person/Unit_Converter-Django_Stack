# Introduction

This is the FullStack site with React + Django Rest + MySQL.
Functionality is to add and convert units.

## setup environment

You have to install something to run django well. See following commands.

- Step 1: Open the cmd terminal

- Step 2: In python, a curl is a tool for transferring data requests to and from a server. Use the following command to request:

  ```
  curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
  ```

- Step 3: Run python get-pip.py command

  ```
  py get-pip.py
  ```

- Step 4: Install packages
  ```
    cd server
    pip install -r requirements.txt
  ```
- Step 5: build database. This project uses MySQL, so you have to install MySQL Server.
  ```
    cd server
    python manage.py makemigrations
    python manage.py migrate
  ```

## How to use

### run server

```
cd server
python manage.py runserver
```

### run client

```
cd client
yarn start
```
