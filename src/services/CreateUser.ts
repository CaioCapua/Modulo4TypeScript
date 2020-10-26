interface TechObject {
    title: string;
    experience: Number;
}

interface Request {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>
}

export default function createUser({name, email, password, techs}: Request) {
    const user = {
        name,
        email,
        password,
        techs,
    }

    return user;
}