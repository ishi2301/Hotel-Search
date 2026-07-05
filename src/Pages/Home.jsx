import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div
            style={{
                width: "90%",
                margin: "40px auto",
                textAlign: "center"
            }}
        >

            <h1
                style={{
                    fontSize: "50px"
                }}
            >
                Hotel Search
            </h1>

            <p
                style={{
                    fontSize: "22px",
                    marginTop: "20px"
                }}
            >
                Find the best hotels with price, rating, location and complete details.
            </p>

            <Link to="/hotels">

                <button
                    style={{
                        marginTop: "30px",
                        padding: "12px 25px",
                        fontSize: "18px",
                        cursor: "pointer"
                    }}
                >
                    Explore Hotels
                </button>

            </Link>

        </div>

    );

}