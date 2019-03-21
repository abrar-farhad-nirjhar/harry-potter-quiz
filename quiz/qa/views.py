from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import *
from .serializer import *
from rest_framework import generics

class QuestionViewset(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class OptionViewset(generics.ListAPIView):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer

class GetOptions(generics.ListAPIView):
    serializer_class = OptionSerializer

    def get_queryset(self):
        # queryset = super().get_queryset()
        q_id = self.kwargs['id']
        queryset = Option.objects.filter(question__id=q_id)
        return queryset
class CorrectViewset(generics.ListAPIView):
    
    serializer_class = CorrectSerializer

    def get_queryset(self):
        q_id = self.kwargs['id']
        queryset = Correct.objects.filter(correct__question__id=q_id)
        
        return queryset






