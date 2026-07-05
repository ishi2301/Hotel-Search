import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { lazy, Suspense } from "react";
import ThemeProvider from "./Context/ThemeContext";

export default function ProductRouting() {

    const Home = lazy(() => import("./Pages/Home"));
    const ProductListing = lazy(() => import("./Pages/ProductListing"));
    const About = lazy(() => import("./Pages/About"));
    const Contact = lazy(() => import("./Pages/Contact"));
    const HotelDetail = lazy(() => import("./Pages/HotelDetail"));
    const NotFound = lazy(() => import("./Pages/NotFound"));
    const Wishlist = lazy(() => import("./Pages/Wishlist"));

    return (

        <ThemeProvider>

            <BrowserRouter>

                <Navbar />

                <Suspense fallback={<h2>Loading...</h2>}>

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/hotels" element={<ProductListing />} />
                        <Route path="/hotel/:id" element={<HotelDetail />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Routes>

                </Suspense>

            </BrowserRouter>

        </ThemeProvider>

    );

}