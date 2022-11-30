import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://y-weld-five.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://y-weld-five.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='px-5'>
            <p className='text-2xl text-center mb-4'>MY ORDERS</p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><div>
                                    {user.name}
                                </div></td>

                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button disabled onClick={() => handleMakeAdmin(user._id)} className='bg-blue-200 rounded py-1 px-4'>Verified Buyer,<br /> <span>
                                    wanna make him/her an admin?</span></button>}</td>
                                <td><button className='bg-red-400 hover:bg-red-500 rounded py-1 px-4'>Delete</button></td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;