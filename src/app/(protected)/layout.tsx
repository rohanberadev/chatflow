import React from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-background">{children}</div>;
}
