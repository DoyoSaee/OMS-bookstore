'use client';

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

// 주문 데이터 타입
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
  price: number;
}

// 주문 데이터
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
    quantity: 1000,
    price: 2500000
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
    quantity: 1000,
    price: 2500000
  }
];

const OrderDetailPage = () => {
  const { orderId } = useParams(); // URL에서 orderId 가져오기
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // orderId에 해당하는 데이터 찾기
    const foundOrder = tableData.find((item) => item.order.orderId === orderId);
    setOrder(foundOrder || null);
  }, [orderId]);

  const commonClass = 'whitespace-nowrap text-neutral-gray-800 text-body3 ';

  return (
    <div className="flex flex-col gap-y-2xl p-6">
      <div className="border rounded-md bg-white shadow-sm">
        <h1 className="text-title3 rounded-md p-4 bg-gray-100">주문 정보</h1>
        <hr />
        {order ? (
          <div className="flex flex-col gap-y-4xs py-4 px-5">
            <LabelAndValue label="주문번호" value={order.order.orderId} className={commonClass} />
            <LabelAndValue label="출판사" value={order.publisherName} className={commonClass} />
            <LabelAndValue label="배송 상태" value={order.logisticsState} className={commonClass} />
            <LabelAndValue label="주문 상태" value={order.orderStatus} className={commonClass} />
            <LabelAndValue label="총 부수" value={order.quantity.toString()} className={commonClass} />
            <LabelAndValue label="총 금액" value={`${order.price.toLocaleString()} 원`} className={commonClass} />
          </div>
        ) : (
          <p className="p-4 text-gray-500">해당 주문을 찾을 수 없습니다.</p>
        )}
      </div>

      {/* 도서 리스트 공간 (현재 데이터 없음) */}
      <div className="border rounded-md bg-white shadow-sm h-[200px] flex items-center justify-center mt-10">
        <p className="text-gray-400">도서 정보 없음</p>
      </div>
    </div>
  );
};

// Label and Value Component
const LabelAndValue: React.FC<{ label: string; value?: string; className: string }> = ({
  label,
  value = '',
  className,
}) => (
  <div className="flex flex-row sm:gap-x-[20px] md:gap-x-[100px]">
    <label className="min-w-[100px] my-auto text-neutral-gray-600 sm:text-body4 md:text-body3 font-bold">
      {label}
    </label>
    <p className={`${className} text-neutral-gray-900 sm:text-body4 md:text-body3 py-2`}>{value}</p>
  </div>
);

export default OrderDetailPage;
