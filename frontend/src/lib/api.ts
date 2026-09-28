const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los proyectos.");
  }

  return response.json();
}

export async function getProjectBySlug(slug: string) {
  const response = await fetch(`${API_URL}/projects/${slug}/`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("No se pudo obtener el proyecto.");
  }

  return response.json();
}
