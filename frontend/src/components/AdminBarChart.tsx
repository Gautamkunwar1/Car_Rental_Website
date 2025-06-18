import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import type { BarChartProps } from '@mui/x-charts/BarChart';

interface CarBookingData {
    month: string;
    Maruti_Suzuki?: number;
    Toyota_Fortuner?: number;
    Alto?: number;
    [key: string]: string | number | undefined;
}

const chartSetting: Partial<BarChartProps> = {
    yAxis: [
        {
            label: 'Car Bookings',
            width: 50,
        },
    ],
    height: 300,
};

const dataset: CarBookingData[] = [
    { month: 'Jan', Maruti_Suzuki: 9, Toyota_Fortuner: 3, Alto: 4 },
    { month: 'Feb', Maruti_Suzuki: 6, Toyota_Fortuner: 9, Alto: 2 },
    { month: 'Mar', Maruti_Suzuki: 7, Toyota_Fortuner: 5, Alto: 5 },
    { month: 'Apr', Maruti_Suzuki: 7, Toyota_Fortuner: 6, Alto: 11 },
    { month: 'May', Maruti_Suzuki: 10, Toyota_Fortuner: 8, Alto: 7 },
    { month: 'June', Maruti_Suzuki: 3, Toyota_Fortuner: 6, Alto: 9 },
    { month: 'July' },
    { month: 'Aug' },
    { month: 'Sep' },
    { month: 'Oct' },
    { month: 'Nov' },
    { month: 'Dec' },
];

export default function CarBookingBarChart(): React.JSX.Element {
    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
                { dataKey: 'Maruti_Suzuki', label: 'Maruti_Suzuki' },
                { dataKey: 'Toyota_Fortuner', label: 'Toyota_Fortuner' },
                { dataKey: 'Alto', label: 'Alto' },
            ]}
            {...chartSetting}
        />
    );
}
