from django.contrib.auth.models import User
from usuario.froms import RegistroForm
from django.views.generic import CreateView


class RegistroUsuario(CreateView):
    model = User
    template_name = "pages/registrar.html"
    form_class = RegistroForm
    success_url = "usuario/login"