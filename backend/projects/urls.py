from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    ContactMessageCreateView,
    ProjectViewSet,
)

router = DefaultRouter()

router.register(
    "projects",
    ProjectViewSet,
    basename="project",
)


urlpatterns = router.urls + [
    path(
        "contact/",
        ContactMessageCreateView.as_view(),
        name="contact-create",
    ),
]
