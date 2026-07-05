import { Link } from "react-router-dom";

export default function NotFound() {

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "80px"
            }}
        >

            <h1
                style={{
                    fontSize: "70px"
                }}
            >
                404
            </h1>

            <h2>Page Not Found</h2>

            <Link to="/">

                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        cursor: "pointer"
                    }}
                >
                    Go To Home
                </button>

            </Link>

        </div>

    );

}