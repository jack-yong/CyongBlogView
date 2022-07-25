import React from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import {
    // LineChart,
    // BarChart,
    PieChart,
    // ScatterChart,
    // RadarChart,
    // MapChart,
    // TreeChart,
    // TreemapChart,
    // GraphChart,
    // GaugeChart,
    // FunnelChart,
    // ParallelChart,
    // SankeyChart,
    // BoxplotChart,
    // CandlestickChart,
    // EffectScatterChart,
    // LinesChart,
    // HeatmapChart,
    // PictorialBarChart,
    // ThemeRiverChart,
    // SunburstChart,
    // CustomChart,
} from 'echarts/charts';
import {
    // GridSimpleComponent,
    GridComponent,
    // PolarComponent,
    // RadarComponent,
    // GeoComponent,
    // SingleAxisComponent,
    // ParallelComponent,
    CalendarComponent,
    // GraphicComponent,
    // ToolboxComponent,
    TooltipComponent,
    // AxisPointerComponent,
    // BrushComponent,
    TitleComponent,
    // TimelineComponent,
    // MarkPointComponent,
    // MarkLineComponent,
    // MarkAreaComponent,
    LegendComponent,
    // LegendScrollComponent,
    // LegendPlainComponent,
    // DataZoomComponent,
    // DataZoomInsideComponent,

    // DataZoomSliderComponent,
    VisualMapComponent,
    // VisualMapContinuousComponent,
    // VisualMapPiecewiseComponent,
    // AriaComponent,
    // TransformComponent,
    // DatasetComponent,
} from 'echarts/components';
import {
    CanvasRenderer,
    // SVGRenderer,
} from 'echarts/renderers';
import { Spin } from 'antd'
import styles from './index.module.less';
echarts.use(
    [TitleComponent,
        TooltipComponent,
        VisualMapComponent,
        CalendarComponent,
        GridComponent,
        LegendComponent,
        LabelLayout,
        PieChart,
        CanvasRenderer]
);


const Chart = (props) => {
    const { option, chartStyles, loading } = props;
    return (
        <Spin spinning={loading}>
            <div className={styles.chart}>
                <ReactEChartsCore
                    className={chartStyles}
                    echarts={echarts}
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme='theme_name'
                />
            </div>
        </Spin>
    )
}

export default Chart