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

        for account in Account.objects.all():
            if account.is_coach == True:
                coach_profile = Coach(
                coach = account,
                gender = "N",
                description = "",
                )
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