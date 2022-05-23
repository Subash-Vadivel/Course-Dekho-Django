from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    # message="<h1>my name is a subash</h1>"
    # return HttpResponse(message)
     return render(request,'index.html')
def aboutus(request):
    return render(request,'aboutus.html')
def cart(request):
    return render(request,'blog.html')
def login(request):
    return render(request,'login.html')
def signup(request):
    return render(request,'signup.html')
def courses(request):
    return render(request,'courses.html')

