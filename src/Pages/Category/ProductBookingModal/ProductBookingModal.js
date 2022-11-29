import React from 'react';

const ProductBookingModal = ({ bookProduct, setBookProduct }) => {
    const { title, sellingPrice } = bookProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value
        const location = form.location.value;

        const productsBooking = {
            itemName: title,
            price,
            name,
            email,
            phone,
            location,
        }

        console.log(productsBooking);
        setBookProduct(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-1'>
                        <label className="label -mb-5">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input name="title" type="text" disabled value={title} className="input w-full text-sm h-9 input-bordered" />
                        <label className="label -mt-2 -mb-5">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" disabled value={`$${sellingPrice}`} className="input text-sm w-full h-9 input-bordered" />
                        <label className="label -mt-2 -mb-5">
                            <span className="label-text">User Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Type your name" className="input w-full h-9 input-bordered" />
                        <label className="label -mt-2 -mb-5">
                            <span className="label-text">User Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Type email" className="input w-full h-9 input-bordered" />

                        <label className="label -mt-2 -mb-5">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name="phone" type="text" placeholder="Type phone number" className="input w-full h-9 input-bordered" />

                        <label className="label -mt-2 -mb-5">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Type where you want to meet" className="input w-full h-9 input-bordered" />
                        <br />
                        <input className='btn btn-block bg-rose-600 border-none text-xl w-full text-white' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductBookingModal;