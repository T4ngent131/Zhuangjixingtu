import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "装机星图｜电脑 DIY 小助手",
  description: "场景驱动选配、硬件可视化诊断与升级路线规划。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
