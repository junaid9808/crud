import {v4 as uuid} from "uuid";
import userModel from "../model/user.js"

 export const getUsers = async(req, res)=>{
    try{
       const users = await userModel.find();
       res.status(200).send({message: "user data", users})
    }catch(error){
        res.status(400).send({message: error.message})
    }
 }
 export const createuser = async(req, res) =>{
    const {email, firstName, lastName, password} = req.body;
    if(!email && !firstName && !lastName && !password){
        res.status(400).send({message:"content can not be empty"})
    }
    const user = new userModel({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    });
    await user.save()
    .then(data=>{
        res.send({
            message: "user created successfully", user:data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "some error occured while creating user"
        });
    });
 };
 export const singlUser = async(req, res) =>{
    try{
        const user3 = await userModel.findById(req.params.id);
        res.status(200).json(user3);
    }catch(error){
        res.status(500).send({message:error.message})
    }
 }
export const updateUser = async(req,res) =>{
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await userModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

 export const deleteUser = async(req, res) =>{
    await userModel.findByIdAndRemove(req.params.id)
    .then(data=>{
        if(!data){
            res.send({message: "user not found"})
        }else{
            res.send({message: "user deleted successfully"})
        }
    }).catch(err =>{
        res.status(500).send({message: err.message});
    });
 };