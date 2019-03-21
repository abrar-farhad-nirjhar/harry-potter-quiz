

from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import *


urlpatterns = [
    path('question', QuestionViewset.as_view(), name="question"),
    path('option', OptionViewset.as_view(), name="option"),
    path('options/<int:id>/', GetOptions.as_view(), name="options"),
    path('correct/<int:id>/', CorrectViewset.as_view(), name="correct")
]
