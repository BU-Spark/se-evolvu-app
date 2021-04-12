# SETUP:
        
First, ensure that your machine has the proper dependencies installed. To do this, we recommend setting up a virtual environment and installing the dependencies there.  
  
To setup and run through a virtual environment:  
- In your terminal, go into the /server folder
- Run the following command:
    - For Windows (***powershell***):
        ```
        $ python3 -m venv env
        $ env\Scripts\Activate.ps1
        $ cd src
        $ pip install -r requirements.txt
        ```
    - For Windows (***command prompt***):
        ```
        $ python3 -m venv env
        $ env\Scripts\activate.bat
        $ cd src
        $ pip install -r requirements.txt
        ```
    - For Linux/MacOS (***bash shell***):
        ```
        $ python3 -m venv env
        $ source env/bin/activate
        $ cd src
        $ pip install -r requirements.txt
        ```


After setting up your virtual environment and installing the dependencies, run the project on the server via the following steps:
  
- From the project's root directory, go into the server/src folder
    ```
    $ cd server/src
    ```
- Run the following commands:
    ```
    $ python manage.py makemigrations
    $ python manage.py migrate
    $ python manage.py runserver
    ```
