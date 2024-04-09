import { useLoaderData } from "react-router-dom"
import ProductList from "../components/product.component"

const Home = function(){
const products = useLoaderData()
    return(
        <div className="max-w-400px mx-auto mb-20">
        <h1 className="text-5xl my-10 font-semibold text-center"> Our Product Catalogue</h1>
        <div className="my-5">
            <select name="type" className="border border-black py-2 font-normal w-[250px] text-center rounded-md mx-auto block">
                <option> Storage System</option>
                <option> Solar panels</option>
            </select>
        </div>
            <div className="gap-y-10 px-3 grid max-sm:grid-cols-1 grid-cols-2 gap-x-10 mt-10 max-w-[1000px] mx-auto">
               {products.map(product=> (
                <div className="col-span-1">
                    <ProductList product={product} />
                </div>
               ))}
            </div>
        </div>
    )
}

export default Home