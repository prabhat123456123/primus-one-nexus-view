
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Dashboard } from "@/components/Dashboard";
import { DataIngestion } from "@/components/DataIngestion";
import { EntityMatching } from "@/components/EntityMatching";
import { EntityGrouping } from "@/components/EntityGrouping";
import { Explainability } from "@/components/Explainability";
import { Visualization } from "@/components/Visualization";
import { Security } from "@/components/Security";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  // Listen for navigation from sidebar
  React.useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      setActiveSection(e.detail);
    };

    window.addEventListener("section-change" as any, handleSectionChange);
    
    return () => {
      window.removeEventListener("section-change" as any, handleSectionChange);
    };
  }, []);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Layout>
      {activeSection === "dashboard" && <Dashboard />}
      {activeSection === "ingestion" && <DataIngestion />}
      {activeSection === "config" && <EntityMatching />}
      {activeSection === "entity" && <EntityGrouping />}
      {activeSection === "explain" && <Explainability />}
      {activeSection === "visual" && <Visualization />}
      {activeSection === "security" && <Security />}
    </Layout>
  );
};

export default Index;
