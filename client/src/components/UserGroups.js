// import React, { useEffect, useState } from 'react';
// import { getUserGroups } from '../services/api';

// const UserGroups = () => {
//     const [userGroups, setUserGroups] = useState([]);

//     useEffect(() => {
//         const fetchUserGroups = async () => {
//             try {
//                 const data = await getUserGroups();
//                 setUserGroups(data);
//             } catch (error) {
//                 console.error('Error fetching user groups:', error);
//             }
//         };

//         fetchUserGroups();
//     }, []);

//     return (
//         <div>
//             <h1>User Groups</h1>
//             <div>
//                 {userGroups.map((group) => (
//                     <div key={group.id} >
//                         <h1>Group_Name : {group.group_name}</h1>
//                         <h1> Description : {group.description}</h1>
//                         <h1>Profile : {group.profile}</h1>
//                         <h1>URL : {group.url}</h1>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UserGroups;
