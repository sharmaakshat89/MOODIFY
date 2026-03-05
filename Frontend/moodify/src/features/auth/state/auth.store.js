import {create} from 'zustand'

import {register, login,logout} from '../services/auth.api'
import userModel from '../../../../../../Backend/src/models/user.model'

export const useAuthStore= create((set,get) => ({
    //declaring state variables here
    user:null,token:null,loading:false,error:null,

    //function to login declared here
    login:async (credentials)=>{
        try{set({loading:true})
        const resp= await login ({credentials})
        set({loading:false,user:resp.user,token:resp.token})}
        catch(err){
            set({error:err.response?.data?.message || 'login failed' , loading:false})
        }
    },

    //function to register
    register:async(data)=>{
        try{
            set({loading:true})
            const resp= await register({data})
            set({loading:false ,user:resp.user,token:resp.token,loading:false})
        }
        catch(err){
            set({error:err.response?.data?.message || 'registration failed' , loading:false})
        }
    },

    //function to logout
    logout: async() =>{
        await logout()
        set({user:null,token:null})
    }


}))