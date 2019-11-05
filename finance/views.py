from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Income, Expenses, Savings
from .serializers import IncomeSerializer, ExpensesSerializer, SavingsSerializer

# Create your views here.

@api_view(['GET', 'POST'])
def income_list(request, format=None):
    if request.method == 'GET':
        income = Income.objects.all()
        serializer = IncomeSerializer(income,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def income_detail(request, pk, format=None):
    try:
        income = Income.objects.get(pk=pk)
    except Income.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = IncomeSerializer(income)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = IncomeSerializer(income, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        income.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def expenses_list(request, format=None):
    if request.method == 'GET':
        expenses = Expenses.objects.all()
        serializer = ExpensesSerializer(expenses,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ExpensesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def expenses_detail(request, pk, format=None):
    try:
        expenses = Expenses.objects.get(pk=pk)
    except Expenses.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ExpensesSerializer(expenses)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ExpensesSerializer(expenses, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        expenses.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def savings_list(request, format=None):
    if request.method == 'GET':
        savings = Savings.objects.all()
        serializer = SavingsSerializer(savings,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SavingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def savings_detail(request, pk, format=None):
    try:
        savings = Savings.objects.get(pk=pk)
    except Savings.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = SavingsSerializer(savings)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SavingsSerializer(savings, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        savings.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)