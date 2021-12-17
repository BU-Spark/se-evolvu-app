from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.core import management
from users.models import UserProfile
from coaches.models import Coach
from accounts.models import Account

class Command(BaseCommand):
    help = 'Loads dummy data into database.'

    def add_arguments(self, parser):
        parser.add_argument('args', nargs='*')

    def handle(self, *args, **kwargs):

        speciality = ["focus_life", "focus_behavioral_wellness", "focus_health_wellness", "focus_holistic", "focus_business"]

        for account in Account.objects.all():
            if account.is_coach == True:
                coach_profile = Coach(
                coach = account,
                gender = "N",
                description = "",
                )
                if account.is_active == True:
                    coach_profile.approved = True

                if account.first_name == "Kevin":
                    coach_profile.focus_life = True
                    coach_profile.maxPrice = 50
                    coach_profile.remote = True
                    coach_profile.inPerson = False
                    # Boston, MA
                    coach_profile.lat=42.360081
                    coach_profile.lon=-71.058884
                elif account.first_name == "Leanne":
                    coach_profile.focus_life = True
                    coach_profile.maxPrice = 50
                    coach_profile.remote = True
                    coach_profile.inPerson = True
                    # Watertown, MA
                    coach_profile.lat=42.370930
                    coach_profile.lon=-71.182831
                elif account.first_name == "Ervin":
                    coach_profile.focus_health_wellness = True
                    coach_profile.maxPrice = 25
                    coach_profile.remote = False
                    coach_profile.inPerson = True
                    # New York City
                    coach_profile.lat=40.712776
                    coach_profile.lon=-74.005974
                elif account.first_name == "Nathan":
                    coach_profile.focus_holistic = True
                    coach_profile.maxPrice = 100
                    coach_profile.remote = False
                    coach_profile.inPerson = True
                    # Hartford, CT
                    coach_profile.lat=41.765804
                    coach_profile.lon=-72.673370
                elif account.first_name == "George":
                    coach_profile.focus_business = True
                    coach_profile.maxPrice = 500
                    coach_profile.remote = True
                    coach_profile.inPerson = True
                    # Boston, MA
                    coach_profile.lat=42.360081
                    coach_profile.lon=-71.058884
                else:
                    # Boston, MA
                    coach_profile.remote = True
                    coach_profile.inPerson = True
                    coach_profile.lat=42.360081
                    coach_profile.lon=-71.058884
                coach_profile.save()
            elif account.is_customer:
                profile = UserProfile(
                user = account,
                gender = "N",
                )
                profile.save()
            account.set_password(account.password)
            account.save()

        self.stdout.write("Successfully hashed passwords.")