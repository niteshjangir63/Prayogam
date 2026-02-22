import Navbar from "../../CustomerComponents/Navbar";
import Banner from "../../CustomerComponents/Banner";
import CategoryFilter from "../../CustomerComponents/CategoryFilter";
import ProductGrid from "../../CustomerComponents/ProductGrid";

export default function MilletDashBoard(){

    return (
        <>
        <Navbar/>
        <Banner/>
        <CategoryFilter/>
        <ProductGrid/>
        </>
    )
}