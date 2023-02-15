import { User } from '../entity/User';
import { UserRepository } from './UserRepository';

describe("Get existing user with id 1", () => {
    test("Must respond with a user object", () => {
        let repository: UserRepository = new UserRepository();
        let response: User | null = repository.getById(1);
        expect(response?.username).toEqual('Usuário 1')
        expect(response?.email).toEqual('usuario-1@gmail.com')
    });
});

describe("Get not existing user", () => {
    test("It should respond null when user id not exists", () => {
        let repository: UserRepository = new UserRepository();
        let response: User | null = repository.getById(20);
        expect(response).toBe(null);
    });
});

describe("UserRepository GetAll", () => {
    test("It should respond with array of users", () => {
        let repository: UserRepository = new UserRepository();
        let response: User[] = repository.getAll();
        expect(response.length).toBeGreaterThan(0)
    });
});