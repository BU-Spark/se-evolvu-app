FROM python:3.7-slim

WORKDIR /backend
COPY requirements.txt /backend/

EXPOSE 8000

RUN pip install -r requirements.txt
COPY . /backend/

ENV DJANGO_KEY="Enter DJANGO_KEY here"

RUN python ./src/manage.py makemigrations
RUN python ./src/manage.py migrate
RUN python ./src/manage.py loaddata initial_data
RUN python ./src/manage.py hashpasswords

CMD ["python", "./src/manage.py", "runserver", "0.0.0.0:8000"]