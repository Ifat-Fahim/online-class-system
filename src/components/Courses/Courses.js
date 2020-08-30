import React from "react";

const Courses = (props) => {
    const { name, price, img } = props.course;
    return (
        <div className="row">
            <div className="col-md-4 mb-3">
                <img src={img} alt="" />
            </div>
            <div className="col-md-8">
                <h5>{name}</h5>
                <p>
                    <small>${price}</small>
                </p>
                <button
                    onClick={() => props.handleCourse(props.course)}
                    className="btn btn-danger"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Courses;
