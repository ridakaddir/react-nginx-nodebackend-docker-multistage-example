First build backend image

on backend directory run

`docker build -t react-backend .`

then run the backend container

`docker run -p -d 8080:8080 react-backend`

---

Then build the frontend image

on front directory run

`docker build -t front .`

then run the front container

`docker run --rm -p 80:80 front`
