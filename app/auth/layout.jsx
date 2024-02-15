
import "@/app/globals.css";
import { siteData } from "@/lib/config"

const {title} = siteData

export const metadata = {
  title: title|"Auth",
  description: "Get authenticated, get verified",
};

export default function RootLayout({
  children,
}) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {children}
    </div>
  );
}
