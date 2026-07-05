import { useEffect, useState } from "react";
import Hotels from "../Components/Hotels";

export default function ProductListing() {

    let PAGE_SIZE = 33;

    let [hotel, setHotels] = useState([]);
    let [filterHotel, setFilterHotel] = useState([]);
    let [total, setTotal] = useState(0);
    let [current, setCurrent] = useState(0);
    let [search, setSearch] = useState("");

    let url = `https://demohotelsapi.pythonanywhere.com/hotels?limit=${PAGE_SIZE}&skip=${current * PAGE_SIZE}`;

    async function dataFetch() {

        let res = await fetch(url);

        let hotelData = await res.json();

        setTotal(hotelData.count);

        setHotels(hotelData.data);

        setFilterHotel(hotelData.data);

    }

    useEffect(() => {

        dataFetch();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, [current]);

    function handleSearch(e) {

        let value = e.target.value;

        setSearch(value);

        let data = hotel.filter((el) =>
            el.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilterHotel(data);

    }

    let noOfPages = Math.ceil(total / PAGE_SIZE);

    function changePage(page) {

        if (page >= 0 && page < noOfPages) {
            setCurrent(page);
        }

    }

    let pages = [];

    if (noOfPages <= 7) {

        for (let i = 0; i < noOfPages; i++) {
            pages.push(i);
        }

    }
    else {

        if (current <= 2) {

            pages = [0, 1, 2, 3, "...", noOfPages - 1];

        }
        else if (current >= noOfPages - 3) {

            pages = [
                0,
                "...",
                noOfPages - 4,
                noOfPages - 3,
                noOfPages - 2,
                noOfPages - 1
            ];

        }
        else {

            pages = [
                0,
                "...",
                current - 1,
                current,
                current + 1,
                "...",
                noOfPages - 1
            ];

        }

    }

    return (

        <>

            <h1 style={{ textAlign: "center" }}>
                Hotel Listing
            </h1>

            <div
                style={{
                    width: "90%",
                    margin: "20px auto"
                }}
            >

                <input
                    type="text"
                    placeholder="Search Hotel"
                    value={search}
                    onChange={handleSearch}
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "18px"
                    }}
                />

            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    paddingBottom: "100px"
                }}
            >

                {
                    filterHotel.map((el) => (

                        <Hotels
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            thumbnail={el.thumbnail}
                            price={el.price}
                            rating={el.rating}
                            location={el.location}
                            description={el.description}
                        />

                    ))
                }

            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "rgba(25,25,25,0.9)",
                    padding: "10px 15px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
                    zIndex: "1000"
                }}
            >

                <button
                    disabled={current === 0}
                    onClick={() => changePage(current - 1)}
                >
                    Prev
                </button>

                {
                    pages.map((el, index) => {

                        if (el === "...") {

                            return <span key={index}>...</span>;

                        }

                        return (

                            <button
                                key={el}
                                onClick={() => changePage(el)}
                                style={{
                                    backgroundColor: current === el ? "blue" : "",
                                    color: current === el ? "white" : ""
                                }}
                            >
                                {el + 1}
                            </button>

                        );

                    })
                }

                <button
                    disabled={current === noOfPages - 1}
                    onClick={() => changePage(current + 1)}
                >
                    Next
                </button>

            </div>

        </>

    );

}