import React, { useEffect, useState } from "react";
import sampleImage from "../../images/IMG-1.jpg";
import { sted } from "../../api/API";

const Card = (props) => {
    const [placeName, setPlaceName] = useState("");

    const getData = async () => {
        const newPlace = await sted.get(props.place);
        setPlaceName(newPlace.data.navn);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div type="button" className="w-max mx-auto">
            <div className="rounded-md flex h-32 mx-auto hover:shadow-lg hover:text-black ">
                <div className="my-auto px-12    font-thin">
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>

                <div className="relative bg-secondary grid grid-cols-1 place-items-center content-center px-8 ">
                    <h5 className="small-title">{props.title}</h5>
                    <p
                        className="cursor-pointer hover:text-secondary"
                        type="button"
                    >
                        Læs mere
                    </p>
                </div>

                {/* price */}
                <div className="bg-primary h-32  w-10 grid grid-cols-1 place-items-center content-center">
                    <div className="rotate-90  w-max">
                        <span className=" text-white font-medium ">
                            {props.price} dk
                        </span>
                    </div>
                </div>

                {/* image */}
                <figure className="rounded">
                    <img
                        className="h-3/4 w-48 rounded-md"
                        src={sampleImage}
                        alt="This is a sample image"
                    />
                    <figcaption className=" h-1/4 bg-black text-white p-1">
                        {placeName}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Card;
