from django.shortcuts import render
from django.views.generic import View , FormView , CreateView
from usuario.forms import LoginForm


#class LoginView(View):
#    def get(self, request, *args, **kwargs):
#        return render(request, "pages/login.html",{})

class LoginView(CreateView):
    template_name = "pages/login.html"
    form_class = LoginForm
    success_url = '/'

    #def form_validate(self, form):
