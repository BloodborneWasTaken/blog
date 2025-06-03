import { Suspense } from "react";
import CategoryList from "./_components/categoryList.jsx";
import BlogList from "./_components/blogList.jsx";
import Spinner from "@/ui/Spinner";

export default function BlogPage({ children }) {
  return (
    <div className="mr-3 bg-white">
   
      <h1 className="text-lg font-bold mb-12 mr-5">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 mr-4 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
            <BlogList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">{children}</div>
      </div>
    </div>
  );
}
