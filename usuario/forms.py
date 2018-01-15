from django import forms
from .models import Login

class LoginForm(forms.ModelForm):
    email = forms.EmailField(label = 'Correo', 
        widget = forms.EmailInput(
            attrs = {
                'class' : 'form-control',
                'style': 'color:white'
            }
        ))
    password = forms.CharField(label = 'Password',
        widget = forms.PasswordInput(
            attrs = {
                'class' : 'form-control',
                'style': 'color:white'
            }
        ))
    class Meta:
        model = Login
        fields = ['email', 'password']

    def clean_login(self, *args, **kwargs):
        email = self.cleaned_data.get("email")
        qs = Login.objects.filter(email__iexact=email)
        if qs.exists():
            raise forms.ValidationError("Este correo ya existe")

        return email