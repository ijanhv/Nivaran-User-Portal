import RegisterForm from "@/components/form/RegisterForm";
import PortalLayout from "@/components/layouts/PortalLayout";
import React from "react";

const RegisterPage = () => {
  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto mt-10 px-10 md:px-5 lg:px-1">
        <h1 className="text-3xl text-slate-900 font-bold font-800 font-nunito uppercase">
          Register
        </h1>

        
        <RegisterForm />
      </div>
    </PortalLayout>
  );
};

export default RegisterPage;
