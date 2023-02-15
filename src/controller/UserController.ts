import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

export class UserController {

    userRepository: UserRepository = new UserRepository();

    async getAll (request: Request, response: Response, next: NextFunction) {
        let users: User[] = this.userRepository.getAll();
        return response.send(users).status(200);
    }

    async getById (request: Request, response: Response, next: NextFunction) {
        let user_id = parseInt(request.params.id);
        let user = this.userRepository.getById(user_id);
    
        if (user == null) {
            return response.send('User Not Found').status(204);
        } else {
            return response.send(user).status(200);
        }
    }

}