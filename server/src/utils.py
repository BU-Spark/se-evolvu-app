import os
import requests

def convertLocationToLatLon(location):
    try:
        # Turn zipCode into a lat and long 
        API_KEY = os.environ['MAPQUEST_API_KEY']
        response = requests.get(f"http://open.mapquestapi.com/geocoding/v1/address?key={API_KEY}&location={location}")
        json = response.json()
        latLng = json["results"][0]["locations"][0]
        lat = latLng["latLng"]["lat"]
        lon = latLng["latLng"]["lng"]
        return [lat, lon]
    except requests.exceptions.RequestException as err:
        return err