from django.contrib import admin

from .models import Project, ProjectImage


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = (
        "image",
        "order",
    )
    ordering = ("order", "id")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "featured",
        "created_at",
    )

    list_filter = (
        "category",
        "featured",
    )

    search_fields = (
        "title",
        "description",
        "category",
    )

    prepopulated_fields = {"slug": ("title",)}

    inlines = [
        ProjectImageInline,
    ]
