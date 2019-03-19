from rest_framework import serializers

from .models import *



class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('__all__')


class OptionSerializer(serializers.ModelSerializer):

    question = QuestionSerializer()
    class Meta:
        model = Option
        fields = ('__all__')
    



class CorrectSerializer(serializers.ModelSerializer):

    correct = OptionSerializer()

    class Meta:
        model = Correct
        fields = ('__all__')