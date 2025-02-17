import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/orders/BasicTableOne";

import React from "react";

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="주문 목록" />
      <div className="space-y-6">
        <ComponentCard title="">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
