import { User } from "../entity/User";

export class UserRepository {

    private generateUsers() {
        let users: User[] = new Array();
        for (let i = 0; i < 10; i++) {
            let userId: number = i + 1;
            let user: User = new User(userId, `Usuário ${ userId }`, `usuario-${userId}@gmail.com`);
            users.push(user)
        }
        return users;
    }

    getAll() {
        let users: User[] = this.generateUsers();
        return users;
    }

    getById(id: number) {
        let users: User[] = this.generateUsers();

        let result = users.filter(u => u.id == id);
        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }
    
}