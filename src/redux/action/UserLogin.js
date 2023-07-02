
import { useNavigate } from 'react-router-dom'



export const UserLogin = () => {
    const history = useNavigate()
 const login = (email) => async (dispatch) => {
        

        dispatch({ type: "LOGIN", payload: email })
        localStorage.setItem("user", JSON.stringify(email))
        setTimeout(() => {
            history("/")
        }, 1000);

    }

    return { login }
}