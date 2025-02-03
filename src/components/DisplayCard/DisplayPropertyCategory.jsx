import React from "react";

function DisplayPropertyCategory({ image, title, description, badges, isNew }) {
    return (
        <article
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            style={{ minWidth: "300px", border: "2px solid lightgrey", maxHeight: "300px" }}
        >
            <img
                alt={title}
                src={image || "https://via.placeholder.com/300"}
                className="h-40 w-full object-cover"
            />

            <div className="bg-white p-2 sm:p-2 text-left">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    {isNew && (
                        <div>
                            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                New
                            </span>
                        </div>
                    )}
                </div>
                <h3 className="mt-0.5 text-lg text-gray-900">{description}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default DisplayPropertyCategory;





