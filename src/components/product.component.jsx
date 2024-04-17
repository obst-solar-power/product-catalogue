import { Link } from "react-router-dom"

const ProductList = function({product}){

    return(
        <div className="shadow-sm">
           <div className="group h-[350px] flex items-center justify-center border border-gray-200 hover:bg-[#0f2745]/5 rounded-t-md">
                <img src={product.url} className="group-hover:scale-125 h-[250px] transition-all" />
           </div>
           <div className="bg-slate-100 p-3 px-5 text-center">
                <h1 className="text-md font-medium mb-3 text-2xl"> {product.title}</h1>
                {/* <p className="text-base font-normal ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non cumque repellendus quibusdam. Ipsum deleniti quam debitis odit sunt, commodi inventore officia aut expedita fugit, esse </p> */}
                {/* <p className="font-semibold my-2 text-2xl">${product.price.toLocaleString()}</p> */}
           </div>
           <Link to={"/product/"+product._id} className="font-semibold py-4 block text-white w-full text-center hover:bg-[#0f2745]/90 bg-[#0f2745] rounded-lg ">
                View
           </Link>
        </div>
    )
}

export default ProductList