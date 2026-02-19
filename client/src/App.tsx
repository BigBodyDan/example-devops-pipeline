import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get('/').then(res => {
            setMessage(res.data.message)
        })
    }, [])

    return (
        <div className="App">
            <h1>MERN App</h1>
            <p>{message}</p>
        </div>
    )
}

export default App