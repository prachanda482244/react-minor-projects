import { useEffect, useState } from "react";

const Project7LoadMore = () => {


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disabledButton, setDisabledButton] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`)
            const data = await response.json()
            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data?.products])
                setLoading(false)
                setError(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)

        }
    }
    if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">Loading Data ! Please Wait. .</div>

    useEffect(() => {
        fetchData()
    }, [count])


    useEffect(() => {
        if (products && products.length === 100) setDisabledButton(true)
    }, [products])


    if (error) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">Error occured ! Please Wait. .</div>
    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5  gap-5">
                {
                    products && products.length ?
                        products?.map((item) => (
                            <div key={item.id} className="border-2 flex flex-col items-center gap-4 border-purple-800 rounded-lg p-5">
                                <img className="h-80 object-cover w-full" src={item.thumbnail} alt={item.title} />
                                <h2 className="text-2xl font-semibold">{item.title}</h2>
                            </div>
                        ))
                        : null
                }
            </div>

            <button disabled={disabledButton} className="py-4 px-10 bg-blue-400 disabled:bg-blue-200 hover:bg-blue-900 w-full" onClick={() => setCount(count + 1)}>Load More</button>
            {
                disabledButton ? <p>You have reached the 100 products</p> : null
            }
        </div>
    )
}

export default Project7LoadMore
