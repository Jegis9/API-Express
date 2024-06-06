import { json } from 'stream/consumers';
import {pool} from '../db.js'

export const getUsers = async(req, res)=>{


    const {rows} = await pool.query("select * from users");

    console.log(rows);

    res.json(rows);
}


export const getUserById = async (req, res)=>{

    const { id } = req.params;
    const {rows} = await pool.query('select * from users where id= $1',[id])

    if (rows.length ===0){
        return res.status(404).json({message:"user not found"});
    }
    else{

        res.json(rows);
    }

}


export const createUser = async (req, res)=>{

try {
    const data = req.body;

    const {rows} = await pool.query('INSERT INTO USERS (ID, NAME,EMAIL,PASSWORD) VALUES ($1,$2,$3,$4)', [data.id, data.name, data.email, data.password]);
    
    return res.json(rows[0]);
} catch (error) {
    if(error?.code ==='23505'){
        return res.status(409).json({message: "Email already exist"});
    }

    return res.status(500),json({menssge: "Internal server error"});
}
};


export const updateUser = async (req, res)=>{
    const {id} = req.params
    const {rowCount} = await pool.query('delete from users where id = $1',[id]);

    if(rowCount.length === 0){
        return res.status(404).json({message:"user not found"});

    }

    else{
        return res.sendStatus(204);
    }
}


export const deleteUser =  async(req, res)=>{
    const {id} = req.params;
    const data = req.body;

    const {rows} = await pool.query('update users set name=$1, email=$2, password=$3 where id=$4 RETURNING *', [data.name, data.email, data.password, id])
   
    return res.json(rows[0]);
}