import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import OrderDetailPage from "@/components/orders/orderDetail/orderDetail";

import React from "react";

export default function OrderInfoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="주문 상세" />
      <div className="space-y-6">
        <ComponentCard title="">
          <OrderDetailPage />
        </ComponentCard>
      </div>
    </div>
  );
}
