import { useNavigate } from "react-router-dom";

export default function Hotels(props) {

    let navigate = useNavigate();

    return (

        <div
            style={{
                display: "flex",
                gap: "30px",
                border: "1px solid lightgray",
                padding: "20px",
                borderRadius: "10px",
                alignItems: "center"
            }}
        >

            <div>

                <img
                    src={props.thumbnail}
                    alt={props.name}
                    style={{
                        width: "300px",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />

            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    width: "100%",
                    textAlign: "left"
                }}
            >

                <h2
                    style={{
                        margin: "0"
                    }}
                >
                    {props.name}
                </h2>

                <p
                    style={{
                        margin: "0",
                        lineHeight: "28px"
                    }}
                >
                    {props.description.slice(0, 170)}...
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <p
                        style={{
                            margin: "0"
                        }}
                    >
                        📍 Location : {props.location}
                    </p>

                    <p
                        style={{
                            margin: "0"
                        }}
                    >
                        ⭐ {props.rating}
                    </p>

                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <h2
                        style={{
                            margin: "0"
                        }}
                    >
                        ₹ {props.price}
                    </h2>

                    <div
    style={{
        display: "flex",
        gap: "12px"
    }}
>

    <button
        onClick={() => alert("Added to Wishlist")}
        style={{
            padding: "10px 18px",
            backgroundColor: "#ea580c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
        }}
    >
        Add to Wishlist
    </button>

    <button
        onClick={() => navigate(`/hotel/${props.id}`)}
        style={{
            padding: "10px 18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
        }}
    >
        View Details
    </button>

</div>

                </div>

            </div>

        </div>

    );

}