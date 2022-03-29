from django.apps import AppConfig


class RestGoogleAuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rest_google_auth'

    def ready(self):
        import rest_google_auth.signals
