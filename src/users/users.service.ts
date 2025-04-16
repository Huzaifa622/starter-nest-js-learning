import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
          id: 1,
          email: "user1@example.com",
          username: "alphaWolf123",
          password: "pass123alpha",
          role: "admin"
        },
        {
          id: 2,
          email: "user2@example.com",
          username: "bravoTiger456",
          password: "pass456bravo",
          role: "vendor"
        },
        {
          id: 3,
          email: "user3@example.com",
          username: "charlieEagle789",
          password: "pass789charlie",
          role: "user"
        },
        {
          id:4,
          email: "user4@example.com",
          username: "deltaShark321",
          password: "pass321delta",
          role: "admin"
        },
        {
          id: 5,
          email: "user5@example.com",
          username: "echoBear654",
          password: "pass654echo",
          role: "vendor"
        },
        {
          id:6,
          email: "user6@example.com",
          username: "foxtrotLion987",
          password: "pass987foxtrot",
          role: "user"
        },
        {
          id: 7,
          email: "user7@example.com",
          username: "golfPanther111",
          password: "pass111golf",
          role: "admin"
        },
        {
          id: 8,
          email: "user8@example.com",
          username: "hotelSnake222",
          password: "pass222hotel",
          role: "vendor"
        },
        {
          id: 9,
          email: "user9@example.com",
          username: "indiaFalcon333",
          password: "pass333india",
          role: "user"
        },
        {
          id: 10,
          email: "user10@example.com",
          username: "julietRhino444",
          password: "pass444juliet",
          role: "vendor"
        }
      ];
      

      findAll(role?: "admin" | "vendor" | "user"){
        if(role){
            const users = this.users.filter(u=> (u.role == role));
            return users
        }

        return this.users
      }

      findOne(id:number){
         return this.users.find(u=> u.id == id)
      }

      create(user:{email:string; username:string; password:string; role: "admin" | "vendor" | "user"}){
        
        const getUserByHighestId = [...this.users].sort((a,b)=> a.id - b.id);

        const newUser = {
            id:getUserByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser);

      }
      
}
