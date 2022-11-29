import React from 'react';

const ProductBookingModal = ({ bookProduct }) => {
    const { title, sellingPrice, originalPrice } = bookProduct;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p><span className='font-bold'>Resale Price:</span> ${sellingPrice}</p>
                    <p><span className='font-bold'>Original Price:</span> ${originalPrice}</p>
                </div>
            </div>
        </>
    );
};

export default ProductBookingModal;