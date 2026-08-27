import React from "react";
import {
  EL_NINO_AVERAGE_CM,
  EL_NINO_NORMAL_CM,
  EL_NINO_SNOWFALL_DATA,
} from "@/data/blog/whistler-weather-forecast-2026-2027";

const CHART_HEIGHT = 280;
const BAR_WIDTH = 36;
const BAR_GAP = 16;
const PADDING_LEFT = 48;
const PADDING_RIGHT = 16;
const PADDING_TOP = 24;
const PADDING_BOTTOM = 56;

export default function ElNinoSnowfallChart() {
  const maxValue = Math.max(
    ...EL_NINO_SNOWFALL_DATA.map((d) => d.snowfall),
    EL_NINO_NORMAL_CM
  );
  const chartInnerHeight = CHART_HEIGHT - PADDING_TOP - PADDING_BOTTOM;
  const totalBarsWidth =
    EL_NINO_SNOWFALL_DATA.length * BAR_WIDTH +
    (EL_NINO_SNOWFALL_DATA.length - 1) * BAR_GAP;
  const chartWidth = PADDING_LEFT + totalBarsWidth + PADDING_RIGHT;

  const scaleY = (value: number) =>
    PADDING_TOP + chartInnerHeight - (value / maxValue) * chartInnerHeight;

  const normalY = scaleY(EL_NINO_NORMAL_CM);

  return (
    <figure className="not-prose my-10" aria-labelledby="el-nino-snowfall-chart-title">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 overflow-x-auto">
        <h3
          id="el-nino-snowfall-chart-title"
          className="text-lg sm:text-xl font-bold text-gray-900 mb-1"
        >
          Whistler Snowfall During Significant El Niño Winters
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Snowfall measured through March 31 vs. 30-year normal
        </p>
        <svg
          viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}
          className="w-full min-w-[320px] max-w-full h-auto"
          role="img"
          aria-label="Bar chart of Whistler snowfall during significant El Niño winters compared to 914 cm normal"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const value = Math.round(maxValue * tick);
            const y = scaleY(value);
            return (
              <g key={tick}>
                <line
                  x1={PADDING_LEFT}
                  y1={y}
                  x2={chartWidth - PADDING_RIGHT}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth={1}
                />
                <text
                  x={PADDING_LEFT - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-gray-500 text-[10px]"
                >
                  {value}
                </text>
              </g>
            );
          })}

          <line
            x1={PADDING_LEFT}
            y1={normalY}
            x2={chartWidth - PADDING_RIGHT}
            y2={normalY}
            stroke="#111827"
            strokeWidth={2}
            strokeDasharray="6 4"
          />
          <text
            x={chartWidth - PADDING_RIGHT}
            y={normalY - 6}
            textAnchor="end"
            className="fill-gray-900 text-[10px] font-semibold"
          >
            914 cm normal
          </text>

          {EL_NINO_SNOWFALL_DATA.map((item, index) => {
            const x =
              PADDING_LEFT + index * (BAR_WIDTH + BAR_GAP);
            const barTop = scaleY(item.snowfall);
            const barHeight = CHART_HEIGHT - PADDING_BOTTOM - barTop;
            const aboveNormal = item.snowfall >= EL_NINO_NORMAL_CM;

            return (
              <g key={item.season}>
                <rect
                  x={x}
                  y={barTop}
                  width={BAR_WIDTH}
                  height={barHeight}
                  fill={aboveNormal ? "#111827" : "#6b7280"}
                  rx={3}
                />
                <text
                  x={x + BAR_WIDTH / 2}
                  y={barTop - 6}
                  textAnchor="middle"
                  className="fill-gray-900 text-[9px] font-medium"
                >
                  {item.snowfall}
                </text>
                <text
                  x={x + BAR_WIDTH / 2}
                  y={CHART_HEIGHT - PADDING_BOTTOM + 16}
                  textAnchor="middle"
                  className="fill-gray-600 text-[9px]"
                  transform={`rotate(-35, ${x + BAR_WIDTH / 2}, ${CHART_HEIGHT - PADDING_BOTTOM + 16})`}
                >
                  {item.season}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-sm text-gray-700 mt-4 font-medium">
          Average across these seven El Niño winters: {EL_NINO_AVERAGE_CM} cm,
          approximately 5% above the {EL_NINO_NORMAL_CM} cm normal.
        </p>
      </div>
    </figure>
  );
}
