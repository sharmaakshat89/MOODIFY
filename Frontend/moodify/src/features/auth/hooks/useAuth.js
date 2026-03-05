import {useAuthStore} from '../state/auth.store'

export const useAuth= ()=>{

    const user = useAuthStore((state) => state.user)
    const token = useAuthStore((state)=>{state.token})
    const loading= useAuthStore((state)=>{state.loading})
    const error=useAuthStore((state)=>{state.error})
    const login=useAuthStore((state)=>{state.login})
    const register=useauthstore((state)=>[state.register])
    const logout=useauthstore((state)=>{state.logout})

    return {user,token,loading,error,login,register,logout}
}