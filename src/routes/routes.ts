import { HealthController } from "../controller/HealthController";
import { UserController } from "../controller/UserController";

export const Routes = [
    {
        method: "get",
        route: "/api/users",
        controller: UserController,
        action: "getAll"
    },
    {
        method: "get",
        route: "/api/users/:id",
        controller: UserController,
        action: "getById"
    },
    {
        method: "get",
        route: "/api/health",
        controller: HealthController,
        action: "get"
    }
]