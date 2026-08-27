import React from "react";
import { EL_NINO_MONTHLY_DATA } from "@/data/blog/whistler-weather-forecast-2026-2027";

const CHART_HEIGHT = 260;
const BAR_WIDTH = 40;
const BAR_GAP = 20;
const PADDING_LEFT = 40;
const PADDING_RIGHT = 16;
const PADDING_TOP = 24;
const PADDING_BOTTOM = 48;

const HIGHLIGHT_MONTHS = new Set(["Jan", "Feb"]);

export default function ElNinoMonthlyChart() {
  const maxPercent = Math.max(...EL_NINO_MONTHLY_DATA.map((d) => d.percent), 100);
  const chartInnerHeight = CHART_HEIGHT - PADDING_TOP - PADDING_BOTTOM;
  const totalBarsWidth =
    EL_NINO_MONTHLY_DATA.length * BAR_WIDTH +
    (EL_NINO_MONTHLY_DATA.length - 1) * BAR_GAP;
  const chartWidth = PADDING_LEFT + totalBarsWidth + PADDING_RIGHT;

  const scaleY = (value: number) =>
    PADDING_TOP + chartInnerHeight - (value / maxPercent) * chartInnerHeight;

  const normalY = scaleY(100);

  return (
    <figure className="not-prose my-10" aria-labelledby="el-nino-monthly-chart-title">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 overflow-x-auto">
        <h3
          id="el-nino-monthly-chart-title"
          className="text-lg sm:text-xl font-bold text-gray-900 mb-6"
        >
          When Does Whistler Get the Most Snow During El Niño?
        </h3>
        <svg
          viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}
          className="w-full min-w-[320px] max-w-full h-auto"
          role="img"
          aria-label="Bar chart showing monthly El Niño snowfall percentages at Whistler relative to normal, with January at 138% and February at 127%"
        >
          {[0, 50, 100, 150].map((tick) => {
            if (tick > maxPercent) return null;
            const y = scaleY(tick);
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
                  {tick}%
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
            100% normal
          </text>

          {EL_NINO_MONTHLY_DATA.map((item, index) => {
            const x = PADDING_LEFT + index * (BAR_WIDTH + BAR_GAP);
            const barTop = scaleY(item.percent);
            const barHeight = CHART_HEIGHT - PADDING_BOTTOM - barTop;
            const highlight = HIGHLIGHT_MONTHS.has(item.month);

            return (
              <g key={item.month}>
                <rect
                  x={x}
                  y={barTop}
                  width={BAR_WIDTH}
                  height={barHeight}
                  fill={highlight ? "#111827" : "#9ca3af"}
                  rx={3}
                />
                <text
                  x={x + BAR_WIDTH / 2}
                  y={barTop - 6}
                  textAnchor="middle"
                  className={`text-[10px] font-semibold ${highlight ? "fill-gray-900" : "fill-gray-700"}`}
                >
                  {item.percent}%
                </text>
                <text
                  x={x + BAR_WIDTH / 2}
                  y={CHART_HEIGHT - PADDING_BOTTOM + 20}
                  textAnchor="middle"
                  className="fill-gray-700 text-[11px] font-medium"
                >
                  {item.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
