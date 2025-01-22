import MainLayout from "@/layouts/MainLayout";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectWrapper from "./ProjectWrapper";
import { allProjects, mobileProjects, webProjects } from "./constant";

const Portofolio = () => {
  return (
    <MainLayout title="Portfolio">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value={"all"}>All</TabsTrigger>
          <TabsTrigger value={"applications"}>Applications</TabsTrigger>
          <TabsTrigger value={"websites"}>WebSites</TabsTrigger>
        </TabsList>
        <TabsContent value={"all"}>
          <ProjectWrapper data={allProjects} />
        </TabsContent>
        <TabsContent value={"applications"}>
          <ProjectWrapper data={mobileProjects} />
        </TabsContent>
        <TabsContent value={"websites"}>
          <ProjectWrapper data={webProjects} />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Portofolio;
