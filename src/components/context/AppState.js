import AppContext from "./AppContext";
import {useNavigate} from 'react-router-dom'

const AppState = (props) => {

    const navigate = useNavigate()

    const host = 'http://localhost:1003/api/user'

    const loginUser = async (email, password) => {

        // const formData = new FormData()
        // formData.append('email', email)
        // formData.append('password', password)

        const response = await fetch(`${host}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email': email, 'password': password})
        })

        const json = await response.json()

        if(json.success) {
            localStorage.setItem('token', json.token)
            navigate('/home')
        } 
    }

    const myProfile = async () => {
        const response = await fetch(`${host}/profile`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json()

        if(json.success) {
            return json.ourUser
        }
    }

    return <AppContext.Provider value={{loginUser, myProfile}}>
        {props.children}
    </AppContext.Provider>
}

export default AppState