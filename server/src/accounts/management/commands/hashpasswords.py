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

        speciality = ["focus_life", "focus_behavioral", "focus_health_wellness", "focus_holistic", "focus_nutrition_fitness", "focus_business"]

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
                elif account.first_name == "Leanne":
                    coach_profile.focus_behavioral = True
                elif account.first_name == "Erwin":
                    coach_profile.focus_health_wellness = True
                elif account.first_name == "Nathan":
                    coach_profile.focus_holistic = True
                elif account.first_name == "George":
                    coach_profile.focus_nutrition_fitness = True
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