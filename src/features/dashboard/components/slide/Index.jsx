import style from "./styles.module.css";
import img1 from "./assets/p-5.jpg";
import img2 from "./assets/p-2.jpg";
import img3 from "./assets/p-3.jpg";
import img4 from "./assets/p-4.jpg";
import img5 from "./assets/p-1.jpg";
import { useState } from "react";

export function Slide() {
    const [index, setIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5];

    function nextImg() {
        if (index < 4) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function previousImg() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(4);
        }
    }

    return (
        <div className={style.slide}>
            <div className={style.slide_container}>
                <img src={images[index]} alt="" />;
                <button
                    className={style.slide_left_btn}
                    onClick={() => previousImg()}
                >
                    &#10229;
                </button>
                <button
                    className={style.slide_right_btn}
                    onClick={() => nextImg()}
                >
                    &#10230;
                </button>
                <div className={style.slide_tiny_circles}>
                    <button
                        className={
                            index === 0
                                ? style.slide_tiny_circle_active
                                : style.slide_tiny_circle
                        }
                        onClick={() => setIndex(0)}
                    ></button>
                    <button
                        className={
                            index === 1
                                ? style.slide_tiny_circle_active
                                : style.slide_tiny_circle
                        }
                        onClick={() => setIndex(1)}
                    ></button>
                    <button
                        className={
                            index === 2
                                ? style.slide_tiny_circle_active
                                : style.slide_tiny_circle
                        }
                        onClick={() => setIndex(2)}
                    ></button>
                    <button
                        className={
                            index === 3
                                ? style.slide_tiny_circle_active
                                : style.slide_tiny_circle
                        }
                        onClick={() => setIndex(3)}
                    ></button>
                    <button
                        className={
                            index === 4
                                ? style.slide_tiny_circle_active
                                : style.slide_tiny_circle
                        }
                        onClick={() => setIndex(4)}
                    ></button>
                </div>
            </div>
        </div>
    );
}
