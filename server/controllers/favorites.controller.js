import { Favorites } from '../models/favorites.js'



export const getFavorites=async(req,res)=>{
    try {
        const favorites = await Favorites.findAll()    
        res.json(favorites)    
    } catch (error) {
        return res.status(500).json({message:error.message});
    }    
}

export const createFavorite= async (req,res)=>{
    const {description, small, regular}=req.body    
    try {
        const newFavorite = await Favorites.create({
            description,
            small,
            regular
        })    
        res.json(newFavorite)
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteFavorite= async (req,res)=>{
    const {id}=req.params
    try {
    const deleteFavorite=await Favorites.destroy({
        where:{
            id,
        }
    });
    res.json(deleteFavorite)
    } catch (error) {
        return res.status(500).json({message:error.message});
    }    
}