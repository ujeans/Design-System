import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className="text-sm text-primary " htmlFor={htmlFor}>
      {children}
    </label>
  );
}

<Label htmlFor="username">이메일</Label>;
