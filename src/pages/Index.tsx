
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Dashboard } from "@/components/Dashboard";
import { DataIngestion } from "@/components/DataIngestion";
import { EntityMatching } from "@/components/EntityMatching";
import { EntityGrouping } from "@/components/EntityGrouping";
import { Explainability } from "@/components/Explainability";
import { Visualization } from "@/components/Visualization";
import { Security } from "@/components/Security";
import { LoginForm } from "@/components/LoginForm";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  // Listen for navigation from sidebar
  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      const newSection = e.detail;
      setActiveSection(newSection);
      
      // Show a toast notification when section changes
      const sectionNames: Record<string, string> = {
        dashboard: "Dashboard",
        ingestion: "Data Ingestion",
        config: "Match Configuration",
        entity: "Entity Grouping",
        explain: "Explainability",
        visual: "Visualization",
        security: "Security & Access"
      };
      
      toast({
        title: `Navigated to ${sectionNames[newSection] || newSection}`,
        description: "Content updated successfully",
        duration: 2000
      });
    };

    window.addEventListener("section-change" as any, handleSectionChange);
    
    return () => {
      window.removeEventListener("section-change" as any, handleSectionChange);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "Welcome to PRIMUS ONE Entity Resolution",
      variant: "default",
      duration: 3000
    });
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
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
