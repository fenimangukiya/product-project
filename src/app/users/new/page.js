// import React from 'react'
// interface User {
//     id: number;
//     name: string
// }

// const NewPage = async () => {
//     const res=await fatch('https://jsonplaceholder.typicode.com/users')
//     const users : User[] = await res.json()
//   return (
//     <>
//     <h1>Users</h1>
//         <ul>
//             {users.map(user => <li key={user.id}>{user.name}</li>)}
//         </ul>
// </>
//   )
// }

// export default NewPage



import React from 'react'

const NewPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return (
        <>
            <h1>Users</h1>
            <h3>{new Date().toLocaleTimeString()}</h3>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            
        </>
    )
}

export default NewPage
