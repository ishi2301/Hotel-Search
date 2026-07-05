import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function HotelDetail() {

    let { id } = useParams();
    

    let navigate = useNavigate();

    let [hotel, setHotel] = useState({});
    

    async function getHotel() {

        let response = await fetch(`https://demohotelsapi.pythonanywhere.com/hotels/${id}`);
       
        let result = await response.json();
        
        setHotel(result.data);

    }

    useEffect(() => {

        getHotel();

    }, []);

    return (

        <>

            <div
                style={{
                    width: "90%",
                    margin: "20px auto"
                }}
            >

                <button
                    onClick={() => navigate(-1)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    ← Back
                </button>

            </div>

            <div
                style={{
                    width: "90%",
                    margin: "20px auto",
                    border: "1px solid lightgray",
                    borderRadius: "15px",
                    padding: "25px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
                }}
            >

                {/* Hotel Name */}

                <h1
                    style={{
                        fontSize: "38px",
                        margin: "0 0 25px 0",
                        textAlign: "left",
                        
                        
                    }}
                >
                    {hotel.name}
                </h1>

                {/* Image + Details */}

                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "flex-start"
                    }}
                >

                    <div>

                        <img
                            src={hotel.thumbnail}
                            alt={hotel.name}
                            style={{
                                width: "450px",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: "10px"
                            }}
                        />

                    </div>

                    <div
                        style={{
                            flex: "1",
                            textAlign: "left",
                            
                        }}
                    >

                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: "32px",
                                marginTop:"0px",
                                marginBottom: "20px"
                            }}
                        >
                            {hotel.description}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px",
                                fontSize: "24px"
                            }}
                        >

                            <p><b>Location :</b> {hotel.location}</p>

                            <p><b>Price :</b> ₹ {hotel.price}</p>

                            <p><b>Rating :</b> {hotel.rating}</p>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}