import { Suspense } from "react";
import CategoryList from "./_components/categoryList.jsx";
import BlogList from "./_components/blogList.jsx";
import Spinner from "@/ui/Spinner";

export default function BlogPage({ children }) {
  return (
    <div className="flex flex-col mr-3 bg-primary">
   
      <h1 className="text-lg text-white font-bold mb-12 mr-5">لیست بلاگ ها</h1>
      <div className="flex mr-4 gap-8">
        <div className="flex text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
            <BlogList />
          </Suspense>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
