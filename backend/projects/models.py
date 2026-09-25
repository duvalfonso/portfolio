from django.db import models


class Project(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=150)
    short_description = models.CharField(max_length=300)
    description = models.TextField()

    category = models.CharField(max_length=100)
    technologies = models.JSONField(default=list)
    image = models.ImageField(upload_to="projects/")
    featured = models.BooleanField(default=False)
    github = models.URLField(blank=True, null=True)
    demo = models.URLField(blank=True, null=True)
    overview = models.TextField(blank=True)
    challenge = models.TextField(blank=True)
    solution = models.TextField(blank=True)
    features = models.JSONField(default=list)
    architecture = models.JSONField(default=list)
    learnings = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-featured", "-created_at"]

    def __str__(self):
        return self.title
