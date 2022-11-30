import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:4000/productsBookings?email=${user?.email}`;

    const { data: productsBookings = [] } = useQuery({
        queryKey: ['productsBookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='px-5'>
            <p className='text-2xl text-center mb-4'>MY ORDERS</p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            productsBookings.map((productsBooking, i) => <tr key={productsBooking._id}>
                                <th>{i + 1}</th>
                                <td><div>
                                    {productsBooking.itemName}
                                </div></td>
                                <td><img className='w-16 rounded' src={productsBooking.img}></img></td>
                                <td>{productsBooking.price}</td>
                                <td><button className='bg-blue-200 hover:bg-blue-300 rounded py-1 px-4'>Pay</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;