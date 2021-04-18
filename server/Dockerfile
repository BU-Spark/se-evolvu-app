FROM python:3.7-slim

WORKDIR /backend
COPY requirements.txt /backend/

EXPOSE 8000

RUN pip install -r requirements.txt
COPY . /backend/

ENV DJANGO_KEY="Enter key here"

RUN python ./src/manage.py makemigrations
RUN python ./src/manage.py migrate

CMD ["python", "./src/manage.py", "runserver", "0.0.0.0:8000"]