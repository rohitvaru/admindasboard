import React, { useState } from 'react'
import './Card.css'
import { motion, LayoutGroup } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import Chart from "react-apexcharts";





const Card = (props) => {
    const [expanded, setExpandee] = useState(false);
    return (
        <LayoutGroup>
            {
                expanded ?
                    (<ExpandedCard param={props} setExpandee={() => setExpandee(false)} />) :
                    (<CompactCard
                        param={props} setExpandee={() => setExpandee(true)} />)
            }
        </LayoutGroup>
    )
}


//CompactCard making
const CompactCard = ({ param, setExpandee }) => {
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpandee}
            layoutId={param.id}
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.tittle}</span>
            </div>
            <div className="detail">
                <FontAwesomeIcon icon={Png} className='icon-w' />
                <span>${param.value}</span>
                <span>Last 24 hours</span>

            </div>
        </motion.div>


    )
}
//ExpandedCard making
const ExpandedCard = ({ param, setExpandee }) => {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            fill: {
                color: ["#fff"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2023-09-19T05:30:00.000Z",
                    "2023-09-19T07:00:00.000Z",
                    "2023-09-19T08:00:00.000Z",
                    "2023-09-19T09:00:00.000Z",
                    "2023-09-19T10:00:00.000Z",
                    "2023-09-19T10:30:00.000Z",
                    "2023-09-19T11:30:00.000Z"
                ],
            },
            // xaxis: {
            //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            // }
        },
    };
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId={param.id}
        >
            <div className='xArrow'>
                <FontAwesomeIcon icon={faCircleXmark} onClick={setExpandee} />
            </div>
            <span>{param.tittle}</span>
            <div className="chartContainer">
                <Chart
                    series={param.series}
                    type='area'
                    options={data.options}
                />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}


export default Card
