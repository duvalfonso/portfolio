from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "slug",
            "title",
            "short_description",
            "description",
            "category",
            "technologies",
            "image",
            "featured",
            "github",
            "demo",
            "overview",
            "challenge",
            "solution",
            "features",
            "architecture",
            "learnings",
            "created_at",
            "updated_at",
        ]
