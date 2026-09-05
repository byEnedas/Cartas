# Página romántica

Esta es una página estática y romántica para dedicarle a alguien especial.

## Verla localmente

1. Abre una terminal en esta carpeta.
2. Ejecuta:

```bash
python -m http.server 8000
```

3. En tu navegador visita:

```text
http://localhost:8000
```

## Subirla a GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos archivos usando Git:

```bash
git init
git add .
git commit -m "Primera versión de mi página romántica"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

3. En GitHub entra a tu repositorio.
4. Ve a Settings > Pages.
5. En Source selecciona "Deploy from a branch".
6. Elige la rama `main` y la carpeta `/root`.
7. Guarda y espera a que se publique.

Tu sitio quedará en algo como:

```text
https://TU_USUARIO.github.io/TU_REPO/
```

## Alternativas para publicarla sin usar tu PC

- GitHub Pages: gratis y muy sencillo.
- Netlify: arrastras la carpeta y se publica automáticamente.
- Vercel: también funciona bien con carpetas estáticas.

## Personalizar el texto

Edita el contenido en `index.html` y cambia los mensajes para poner el nombre y los detalles que quieras compartir.
