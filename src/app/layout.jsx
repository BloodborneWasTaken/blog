import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {

  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ", 
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="dark-mode">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>

            {children}

      </body>
    </html>
  );
}
