FROM python:3.7.4-alpine3.10

WORKDIR /backend/

RUN pip install --upgrade pip
COPY requirements.txt /backend/
RUN pip install -r requirements.txt
EXPOSE 8000

COPY ./src /backend/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]