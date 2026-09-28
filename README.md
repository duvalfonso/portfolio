# Portfolio Personal

Un proyecto full-stack para desplegar mi portafolio web personal, estructurado con una arquitectura moderna que separa el frontend y el backend para garantizar escalabilidad y rendimiento.

---

## 🛠️ Tecnologías y Stack Utilizado

### **Frontend**
* **Framework / Librería:** Next.js / React
* **Estilos:** Tailwind CSS
* **Despliegue:** [Vercel](https://vercel.com/)

---

### **Backend**
* **Lenguaje:** Python
* **Framework:** Django / Django REST Framework
* **Manejo de CORS:** `django-cors-headers`
* **Almacenamiento S3:** `boto3`, `django-storages`
* **Gestión de variables de entorno:** `python-dotenv`
* **Servidor WSGI/ASGI:** `gunicorn` / `uvicorn`
* **Conexión a Base de Datos:** `psycopg2-binary` (PostgreSQL)
* **Despliegue:** [Railway](https://railway.app/)

---

### **Infraestructura y Servicios en la Nube**
* **Frontend Hosting:** Vercel
* **Backend & Base de Datos:** Railway (Hosting de la API y PostgreSQL)
* **Almacenamiento de Archivos e Imágenes:** Amazon Web Services (AWS S3)

---

## 🚀 Arquitectura del Proyecto

```text
  [ Cliente / Navegador ]
             │
             ▼
      [ Vercel (Frontend) ]
             │
             ▼ REST API
      [ Railway (Backend Django) ]
       ├── [ Base de Datos PostgreSQL ] (Railway)
       └── [ AWS S3 ] (Almacenamiento de Imágenes)
```

---

## ⚙️ Configuración e Instalación Local

### **Prerrequisitos**
* Python 3.x
* Node.js & npm / yarn / pnpm

---

### **1. Backend**

1. Clona el repositorio y entra al directorio del backend:
```bash
git clone [https://github.com/duvalfonso/portfolio.git](https://github.com/duvalfonso/portfolio.git)
cd portfolio/backend
```

2. Crea y activa un entorno virtual:
```bash
python -m venv venv
# En Linux/macOS:
source venv/bin/activate
# En Windows:
venv\Scripts\activate
```

3. Instala las dependencias necesarias:
```bash
pip install -r requirements.txt
```

4. Configura el archivo de variables de entorno `.env`:
```env
SECRET_KEY=tu_secret_key_de_django
DEBUG=True

(en local)
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=

DATABASE_URL=tu_conexion_postgresql
AWS_ACCESS_KEY_ID=tu_aws_access_key
AWS_SECRET_ACCESS_KEY=tu_aws_secret_key
AWS_STORAGE_BUCKET_NAME=nombre_de_tu_bucket
```

5. Aplica las migraciones e inicia el servidor de desarrollo:
```bash
python manage.py migrate
python manage.py runserver
```

---

### **2. Frontend**

1. Navega a la carpeta del frontend:
```bash
cd ../frontend
```

2. Instala las dependencias e inicia el entorno de desarrollo:
```bash
npm install
npm run dev
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
