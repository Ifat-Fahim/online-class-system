import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fakedata from "../../fakedata/fakedata";
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [courses, setCourses] = useState(fakedata);
    const [cart, setCart] = useState([]);
    const handleCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        console.log(course);
    };
    return (
        <div className="row ml-5">
            <div className="col-md-8">
                {courses.map((course) => (
                    <Courses
                        handleCourse={handleCourse}
                        course={course}
                    ></Courses>
                ))}
            </div>
            <div className="col-md-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
