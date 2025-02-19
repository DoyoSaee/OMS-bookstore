"use client"

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AgencyPage from "./agency/page";
import BookstorePage from "./bookstore/page";
import PublisherPage from "./publisher/page";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // shadcn의 Tabs 컴포넌트 사용
import { useState } from "react";

export default function CustomerPage() {
  const [activeTab, setActiveTab] = useState("agency");

  return (
    <div>
      <PageBreadcrumb pageTitle="거래처관리" />
      <div className="space-y-6">
        <ComponentCard title="">
          <Tabs
          defaultValue={activeTab} 
          onValueChange={setActiveTab}>
            <TabsList  className="rounded-lg p-1 py-5 w-1/2 h-10">
              <TabsTrigger value="agency">대행사</TabsTrigger>
              {/* <TabsTrigger value="bookstore">서점</TabsTrigger> */}
              <TabsTrigger value="publisher">출판사</TabsTrigger>
            </TabsList>
            <TabsContent value="agency">
              <AgencyPage />
            </TabsContent>
            <TabsContent value="bookstore">
              <BookstorePage />
            </TabsContent>
            <TabsContent value="publisher">
              <PublisherPage />
            </TabsContent>
          </Tabs>
        </ComponentCard>
      </div>
    </div>
  );
}
