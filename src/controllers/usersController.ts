import { Request, Response } from "express";
import { User } from "../model/userSchema";



export const getAllUsers = (req: Request, res: Response) => {
    res.send('getting all the users')
}

export const createUser = async(req: Request, res: Response) => {
    try{
        const {username, email, password} = req.body
        if (!username||!email||!password){
            return res.status(400).json({ error: 'Please provide all required fields.' });
        }
        const newUser = new User({ username, email, password });
        await newUser.save()
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // Handle any errors that may occur during user creation
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    

}

export const getUserById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error finding user by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }