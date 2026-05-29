import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function TheRavenNestDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About this property
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to Raven's Nest, a luxurious ski-in/ski-out property
                    offering breathtaking mountain views. This stunning home features
                    spacious living areas, modern amenities, and direct access to
                    Whistler's world-class ski slopes.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Perfect for families or groups, Raven's Nest provides the
                    ideal setting for your Whistler getaway with its convenient
                    location and comfortable accommodations.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Ski-in/Ski-out Access</span>
                    </li>
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Mountain Views</span>
                    </li>
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Hot Tub</span>
                    </li>
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Fully Equipped Kitchen</span>
                    </li>
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Fireplace</span>
                    </li>
                    <li className="flex items-center py-2">
                      <span className="text-gray-700">Free Wi-Fi</span>
                    </li>
                  </ul>
                </div>
    </>
  );
}
