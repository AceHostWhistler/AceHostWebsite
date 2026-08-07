import React from "react";

interface ListPropertyServiceCardProps {
  title: string;
  description: string;
}

export default function ListPropertyServiceCard({
  title,
  description,
}: ListPropertyServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
