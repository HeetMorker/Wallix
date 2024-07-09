import React, { useEffect, useState } from 'react';
import { getUserGroups } from '../services/api';

const Usergroup = () => {
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
      const fetchUserGroups = async () => {
          try {
              const data = await getUserGroups();
              setUserGroups(data);
          } catch (error) {
              console.error('Error fetching user groups:', error);
          }
      };

      fetchUserGroups();
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card">
            <h5 className="card-header text-center">User Group Api</h5>
            <div className="card-body">
              <div className="table-responsive text-nowrap">
                <table className="table table-bordered table-hover">
                  <thead >
                    <tr>
                      <th className='fw-bold fs-6'>group_name</th>
                      <th className='fw-bold fs-6'>description</th>
                      <th className='fw-bold fs-6'>profile</th>
                      <th className='fw-bold fs-6'>restrictions</th>
                      <th className='fw-bold fs-6'>url</th>
                      <th className='fw-bold fs-6'>users</th>
                      <th className='fw-bold fs-6'>timeframes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userGroups.map((group) => (
                      <tr key="{group.id}">
                        <td className='fs-6'>{group.group_name}</td>
                        <td className='fs-6'>{group.description}</td>
                        <td className='fs-6'>{group.profile}</td>
                        <td className='fs-6'>{group.restrictions}</td>
                        <td className='fs-6'>{group.url}</td>
                        <td className='fs-6'>{group.users}</td>
                        <td className='fs-6'>{group.timeframes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Usergroup;