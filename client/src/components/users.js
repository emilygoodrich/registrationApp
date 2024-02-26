import React, {useState, useEffect} from 'react';


function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/users/").then(res => {
            if(res.ok) {
                
                return res.json()
            };
        }).then(jsonRes => {
            setUsers(jsonRes)
            
        });
    });
    console.log(users)
    return (//just usersList
        <div>
            {users}
        </div>
    );
};

export default Users;