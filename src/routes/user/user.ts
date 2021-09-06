import * as UserData from './user_models'
export async function getUsers(){
    try {
        const example = await UserData.user.find()
        delete example.__v;
        return example

    } catch (err) {
        return err
    }
}
export async function addUsers(name1: string,email1: string){

    const userdata = new UserData.user({
        name:name1,email:email1,
    })
    const finded = await UserData.user.find({ email:email1 });
    try {
        if (finded && finded.length > 0) {
           return finded;
        }
        else {

            return await userdata.save()
            // return e1
        }
        // res.status(400).json(e1)
    } catch (err) {
        return err
    }
}
export class User{}

 export class USER {
    _id: string;
    name: string;
    email: string;
    getUser(){
        return "helllo";
    }
    // __v: number;
}