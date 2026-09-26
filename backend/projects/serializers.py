from rest_framework import serializers

from .models import Project, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = [
            "id",
            "image",
            "order",
        ]


class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(
        many=True,
        read_only=True,
    )

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
            "images",
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
