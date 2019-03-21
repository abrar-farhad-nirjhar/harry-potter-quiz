from django.db import models

# Create your models here.


class Question(models.Model):
    question = models.CharField(max_length=255, null=False, blank=False)

    def __str__(self):
        return str(self.question)


class Option(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option = models.CharField(max_length=255, null=False, blank=False)

    def __str__(self):
        return str(self.question.question)+" Answer: "+str(self.option)

class Correct(models.Model):
    correct = models.ForeignKey(Option, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.correct.question.question)+" "+str(self.correct.option)
