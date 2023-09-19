import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
    res.send('getting all the users')
}

export const getUserById = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    res.send(`getting user by Id ${id}`)
}


