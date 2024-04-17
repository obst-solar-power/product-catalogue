import { useLoaderData } from "react-router-dom"
import ProductList from "../components/product.component"
import Preloader from "../components/preloader"
import { useEffect, useState } from "react"

const Home = function(){
    const products = useLoaderData()
    // const [showLoader, setShowLoader] = useState(true)
    // useEffect(function(){
    //     window.addEventListener("load", ()=>{
    //         setShowLoader(false)
    //     })
    // },[])
    const [type, setType] = useState("storage")
    return(
        <>
          {/* {showLoader ? <Preloader /> : null}  */}
        <div className="max-w-400px mx-auto mb-20">
        <h1 className="text-5xl my-10 font-semibold text-center"> Our Product Catalogue</h1>
        <div className="my-5">
            <select value={type} onChange={(e)=> setType(e.target.value)} name="type" className="border border-black py-2 font-normal w-[250px] text-center rounded-md mx-auto block">
                <option value="storage"> Storage System</option>
                <option value="light"> Solar panels</option>
            </select>
        </div>
            <div className="gap-y-10 px-3 grid max-sm:grid-cols-1 grid-cols-2 gap-x-10 mt-10 max-w-[1000px] mx-auto">
               {products.filter(product=> product.type == type).map((product)=> (
                   <div className="col-span-1" key={product._id} >
                    <ProductList product={product} />
                </div>
               ))}
            </div>
        </div>
        </>
    )
}

export default Home