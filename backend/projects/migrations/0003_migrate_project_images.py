from django.db import migrations


def migrate_project_images(apps, schema_editor):
    Project = apps.get_model("projects", "Project")
    ProjectImage = apps.get_model("projects", "ProjectImage")

    for project in Project.objects.all():
        if project.image:
            ProjectImage.objects.get_or_create(
                project=project,
                order=0,
                defaults={
                    "image": project.image.name,
                },
            )


def reverse_migrate_project_images(apps, schema_editor):
    Project = apps.get_model("projects", "Project")
    ProjectImage = apps.get_model("projects", "ProjectImage")

    for project in Project.objects.all():
        image = ProjectImage.objects.filter(project=project, order=0).first()

        if image:
            project.image = image.image.name
            project.save(update_fields=["image"])


class Migration(migrations.Migration):
    dependencies = [
        ("projects", "0002_projectimage"),
    ]

    operations = [
        migrations.RunPython(
            migrate_project_images,
            reverse_migrate_project_images,
        ),
    ]
