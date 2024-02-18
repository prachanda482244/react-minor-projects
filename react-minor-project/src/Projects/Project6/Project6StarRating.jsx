import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Project6StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (currentIndex) => {
        setRating(currentIndex)

    }
    const handleMouseEnter = (currentIndex) => {
        setHover(currentIndex)
    }
    const handleMouseLeave = () => {
        setHover(rating)
    }
    return (
        <div className="text-3xl flex flex-col items-center p-10 gap-5">
            <h1 className="text-center font-bold">
                Star rating
            </h1>
            <div className="flex items-center flex-wrap gap-5">
                {
                    [...Array(noOfStars)].map((_, index) => (
                        < FaStar
                            key={index}
                            className={`${index <= (hover || rating) ? 'text-orange-600' : ''} cursor-pointer text-black`}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />

                    ))
                }
            </div>
        </div>
    )
}

export default Project6StarRating
