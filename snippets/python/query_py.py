# Ripped from Gist https://gist.github.com/walison17/e12ea627dcc1516e84b08a3aef9d9d3c

courses = Course.objects.filter(published_at__lte=timezone.now())

lessons_with_status = Lesson.objects.annotate(
    is_completed=models.Case(
        models.When(
            models.Q(student_progress__completed_at__isnull=False)
            & models.Q(student_progress__user=user),
            then=models.Value(True)
        ),
        default=models.Value(False),
        output_field=models.BooleanField()
    )
)

courses.filter(user_course__user=user).prefetch_related(
    models.Prefetch('modules__lessons', queryset=lessons_with_status)
)
