FROM python:3.7-slim

WORKDIR /backend
COPY requirements.txt /backend/

EXPOSE 8000

RUN pip install -r requirements.txt
COPY . /backend/

ENV DJANGO_KEY="%81^v=cyew^uvg1e3hmhijqo$u$lgwh5e8&x3qhr#o97_cj$kn"
