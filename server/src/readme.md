# SETUP:
        
First, ensure that your machine has the proper dependencies installed. To do this, we recommend setting up a virtual environment and installing the dependencies there.  
  
To setup and run through a virtual environment:  
- In your terminal, go into the /server folder
- Run the following command:
    - For Windows (***powershell***):
        ```
        > python3 -m venv env
        > env\Scripts\Activate.ps1
        > cd src
        > pip install -r requirements.txt
        ```
    - For Windows (***command prompt***):
        ```
        > python3 -m venv env
        > env\Scripts\activate.bat
        > cd src
        > pip install -r requirements.txt
        ```
    - For Linux/MacOS (***bash shell***):
        ```
        $ python3 -m venv env
        $ source env/bin/activate
        $ cd src
        $ pip install -r requirements.txt
        ```


After setting up your virtual environment and installing the dependencies, you need to also set a secret key in your system environment variables that the project will use:
  
For Windows:
- Open the Windows Command Prompt in **Administrative mode**
- Navigate to the project's server folder and activate the virtual environment once again:
    ```
    > env\Scripts\activate.bat
    ```
- Run Python along with the following lines:
    ```
    > python

    >>> from django.core.management.utils import get_random_secret_key
    >>> get_random_secret_key()
    ```
- Copy the resulting key string (excluding quotes) that was returned and quit out of Python:
    ```
    >>> quit()
    ```
- Next, run the following command, replacing {key string} with the string you copied:
    ```
    > setx DJANGO_KEY "{key string}" /M
    ```

For Linux/MacOS:
- In a terminal window, navigate to the project's server folder and activate the virtual environment once again:
    ```
    $ source env/bin/activate
    ```
- Run Python along with the following lines:
    ```
    $ python

    >>> from django.core.management.utils import get_random_secret_key
    >>> get_random_secret_key()
    ```
- Copy the resulting key string (excluding quotes) that was returned and quit out of Python:
    ```
    >>> quit()
    ```
- Next, run the following command, replacing {key string} with the string you copied:
    ```
    $ export DJANGO_KEY="{key string}"
    ```

Now it's time to run the project on the server via the following steps:
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
