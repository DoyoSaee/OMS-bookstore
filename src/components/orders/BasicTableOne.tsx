"use client"

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Order {
  id: number;
  order: {
    image: string;
    name: string;
    orderId: string;
  };
  publisherName: string;
  logisticsState: string;
  orderStatus: string;
  quantity: number;
  price:number;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    order: {
      image: "/images/product/order-status.svg",
      name: "교보문고 (강남)",
      orderId: "0JG0RA4J64VTC",
    },
    publisherName: "위즈덤 하우스(주)",
    logisticsState: "Delivered",
    orderStatus: "Active",
    quantity:1000,
    price:2500000
  },
  {
    id: 2,
    order: {
      image: "/images/product/order-status.svg",
      name: "교보문고 (강남)",
      orderId: "0JGMWNY1Y4SE8",
    },
    publisherName: "위즈덤 하우스(주)",
    logisticsState: "Delivered",
    orderStatus: "Pending",
    quantity:1000,
    price:2500000
  },
  {
    id: 3,
    order: {
      image: "/images/product/order-status.svg",
      name: "교보문고 (홍대)",
      orderId: "0JGY3TWHA4TR2",
    },
    publisherName: "위즈덤 하우스(주)",
    logisticsState: "Delivered",
    orderStatus: "Active",
    quantity:1000,
    price:2500000
  },
  {
    id: 4,
    order: {
         image: "/images/product/order-status.svg",
      name: "교보문고 (광화문)",
      orderId: "0JH6GEBE24R0Y",
    },
    publisherName: "위즈덤 하우스(주)",
    logisticsState: "Delivered",
    orderStatus: "Cancel",
    quantity:1000,
    price:2500000
  },
  {
    id: 5,
    order: {
      image: "/images/product/order-status.svg",
      name: "교보문고 (광화문)",
      orderId: "GY30JHE246GEB",
    },
    publisherName: "위즈덤 하우스(주)",
   logisticsState: "Delivered",
    orderStatus: "Active",
    quantity:1000,
    price:2500000
  },
];

export default function BasicTableOne() {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[700px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                주문번호
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                 출판사명
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                 배송 상태
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                주문 상태
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                총 부수
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                총 금액
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id} 
                          className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                          onClick={() => router.push(`/order/${order.order.orderId}`)}
                >
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={order.order.image}
                          alt={order.order.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.order.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.order.orderId}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.publisherName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.logisticsState === "Delivered"
                          ? "success"
                          : order.logisticsState === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.logisticsState}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.orderStatus === "Active"
                          ? "success"
                          : order.orderStatus === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.orderStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.quantity}
                  </TableCell>
                   <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
