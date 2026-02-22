import Navbar from "../../CustomerComponents/Navbar";
import Banner from "../../CustomerComponents/Banner";
import CategoryFilter from "../../CustomerComponents/CategoryFilter";
import ProductGrid from "../../CustomerComponents/ProductGrid";
import "./MilletDashBoard.css"
export default function MilletDashBoard(){

    return (
        <div className="MilletDashboard">
        <Navbar/>
        <Banner/>
        <CategoryFilter/>
        <ProductGrid/>
        </div>
    )
}