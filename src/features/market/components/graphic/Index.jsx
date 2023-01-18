import React from "react";
import { Chart } from "react-google-charts";
import style from "./styles.module.css";

export function Graphic() {
    const pieData = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const pieOptions = {
        title: "My Daily Activities",
        pieHole: 0.4,
    };

    return (
        <Chart
            width={"100%"}
            height={"100%"}
            loader={<div className={style.load_ff}></div>}
            // chartType="PieChart"
            // data={pieData}

            chartType="ScatterChart"
            data={[
                ["Age", "Weight"],
                [4, 5.5],
                [8, 12],
            ]}
            options={pieOptions}
            rootProps={{ "data-testid": "3" }}
        />
    );
}
