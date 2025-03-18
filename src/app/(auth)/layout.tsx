import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-background">
      {children}
      <div id="clerk-catpcha"></div>
    </div>
  );
}
