import React, { useState } from "react";
import QRCode from "qrcode"
const CreateQR = () => {
  const[qrValue, setQrvalue]=useState('');
  const [qrImageUrl,setQrImageUrl]=useState('')
  const handleSubmit= async(e)=>{
    e.preventDefault()
    if(!qrValue) {
      return alert("Please enter value")
    }
    const response=await QRCode.toDataURL(qrValue)
    setQrImageUrl(response)
    setQrvalue("")
  }
  return (
    <>
      <div className="col-md-4 mx-auto">
        <h2 className="text-center mb-4">Create QR Code</h2>
        <div className="card border-0">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                 placeholder="Enter Text"
                style={{
                  width: "400px",
                  outline: "none",
                  boxShadow: "none",
                }}
                id="text"
                value={qrValue}
                onChange={(e)=>setQrvalue(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  marginLeft: "10px",
                  width: "auto", 
                  height: "38px", 
                }}
              >
                Generate
              </button>
            </form>
              {/* Display the QR code image */}
            {qrImageUrl && (
              <div className="mt-4 text-center">
                <a href={qrImageUrl} download="QR.png">
                <img
                  src={qrImageUrl}  // Use qrImageUrl as the src of the img element
                  alt="Generated QR Code"
                  style={{
                    width: "200px",  // You can adjust the size
                    height: "200px",
                  }}
                />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQR;
