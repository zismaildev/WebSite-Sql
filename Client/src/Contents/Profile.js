// Components
import React from 'react';
import NewNav from '../Components/NewNav'
import Footer from '../Components/Footer'

export default function Profile() {

    // const [Username, setUsername] = useState([])

    // const getUsername = () => {
    //     Axios.get('http://localhost:7777/authen').then((response) => {
    //         setUsername(response.data)
    //     }).then(() => {
    //         setUsername([
    //             ...setUsername,
    //             {
    //                 name: name,
    //             }
    //         ])
    //     })
    // }

    return (
        <div>
            <NewNav />

            <Footer />
        </div>
    )
}

