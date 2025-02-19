"use client"

import ComponentCard from "@/components/common/ComponentCard";
import BasicTable from "@/components/tables/BasicTable";
import Button from "@/components/ui/button/Button";
import { PlusIcon } from "@/icons";
import React, { useState } from "react";
import BrandModal from "../invite-brand/page";

const tableData = [
  {
    first: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven:7,
  }, {
    first: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven:7,
  }, {
    first: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven:7,
  }, {
    first: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven:7,
  }, {
    first: 1,
    second: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven:7,
  },
];

export default function BradPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="space-y-6">
        <ComponentCard title="목록">
            <div className="flex items-center gap-5 right-0 ml-auto justify-end">
               <Button size="sm" variant="outline" onClick={() => setIsModalOpen(true)} startIcon={<PlusIcon />}>
                거래처 추가
                </Button>
                {/* <Button size="md" variant="outline" startIcon={<BoxIcon />}>
                Button Text
                </Button> */}
           </div>
          <BasicTable data={tableData} />
        </ComponentCard>

        <BrandModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </div>
  );
}
