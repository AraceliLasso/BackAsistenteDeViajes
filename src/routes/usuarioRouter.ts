import { Router } from "express";
// import auth from "../middlewares/autenticacion";

const usuarioRouter: Router = Router();

// POST /users/register => Registro de un nuevo usuario.
usuarioRouter.post("/usuario/registro");
// GET /users => Obtener el listado de todos los usuarios.
usuarioRouter.get("/usuarios");

// GET /users/:id => Obtener el detalle de un usuario específico.
usuarioRouter.get("/usuarios/:id");
usuarioRouter.post("/usuarios/login");


export default usuarioRouter;