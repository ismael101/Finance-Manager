from django.db import models

# Create your models here.

class Income(models.Model):
    name = models.CharField(max_length=100)
    amount = models.FloatField(max_length=100)
    month = models.CharField(max_length=15) 
    date = models.DateField(max_length=20)   

class Expenses(models.Model):
    name = models.CharField(max_length=100)
    amount = models.FloatField(max_length=100)
    month = models.CharField(max_length=15) 
    date = models.DateField(max_length=20) 
     
class Savings(models.Model):
    name = models.CharField(max_length=100)
    amount = models.FloatField(max_length=100)
    month = models.CharField(max_length=15) 
    date = models.DateField(max_length=20)  