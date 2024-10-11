import React, { useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

const ReadQR = () => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); // State to track error messages
    const fileRef = useRef();

    const handleClick = () => {
        fileRef.current.click();
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];
        setFile(file);
        setError(null); // Reset error when a new file is selected
        setData(null); // Reset previous data

        try {
            const result = await QrScanner.scanImage(file);
            setData(result);
        } catch (err) {
            setError('QR code not found in the image. Please upload a valid QR code.');
        }
    };

    return (
        <>
            <div className="col-md-4 mx-auto">
                <h2 className="text-center mb-4">Read QR Code</h2>
                <div className="card border-0">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        
                        {/* Button to scan QR Code */}
                        <button type="button" onClick={handleClick} className='btn btn-success mb-4'>
                            Scan QR Code
                        </button>
                        
                        {/* Hidden file input to trigger file selection */}
                        <input type="file" ref={fileRef} onChange={handleChange} accept='.png, .jpg, .jpeg' className='d-none' />
                        
                        {/* Display the scanned QR code image */}
                        {file && (
                            <div className='text-center'>
                                <img src={URL.createObjectURL(file)} alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} className="mb-4" />
                            </div>
                        )}

                        {/* Display the scanned QR code data */}
                        {data && (
                            <p className='display-5 fw-bold text-center mt-4'>
                                Data: {data}
                            </p>
                        )}

                        {/* Display error message if QR code is not found */}
                        {error && (
                            <p className='text-danger text-center mt-4'>
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadQR;
