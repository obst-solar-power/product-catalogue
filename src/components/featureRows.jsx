const FeatureRows = function ({details}) {
    return (
        <div className="text-slate-500 flex justify-between p-3 text-md sm:text-2xl">
            <p className="text-black font-medium">{details[0]}</p>
            <p className="font-light">{details[1]}</p>
        </div>
    )
}

export default FeatureRows