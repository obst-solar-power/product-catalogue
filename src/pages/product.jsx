import Header from "../components/header.components"
import banner from "../assets/banner.jpg"
import products from "../db/products.json"
import { useLoaderData } from "react-router-dom"
import FeatureRows from "../components/featureRows"




const Product = function () {
  const product = useLoaderData();

  const renderDetails = function (data) {
    if (Array.isArray(data.features)) {
      return data.features.map(feature => <FeatureRows details={feature} />)
    }
    const detailsArray = []
    for (let props in data.features) {
      detailsArray.push(
        <div className="text-slate-500 flex justify-between p-3 text-lg sm:text-2xl">
          <p className="uppercase font-normal text-gray-600"> ~ {props.replace("_", " ")}</p>
        </div>
          )
          data.features[props].forEach(detail=>{
            detailsArray.push(<FeatureRows details={detail} />)
          })
    }
    return detailsArray
  }
  return (
    <>
      <div className="container mx-auto max-w-[1000px]">
        <div className="my-10 border-2 border-gray-100 p-5 h-[35vh] flex items-center justify-center">
          
          <img src={product.url} className="object-bottom object-cover h-[90%] " alt="an image of one of obst products" />
        </div>
        <div className="sm:p-10  mx-auto">
          <div className="border border-slate-300">
            <h1 className="font-bold ps-2 border-b-100 inter-var text-3xl py-7">
              {product.title}
            </h1>
          </div>
          <div className="border-x border-slate-300 [&>div]:border-b ">
            <div className="text-black font-normal py-3 px-3 text-2xl"> Main Parameter</div>
            {renderDetails(product)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product