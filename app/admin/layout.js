import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children }) {
  return (
    <div className="md:ml-[33.33%] lg:ml-[25%] xl:ml-[20%] 2xl:ml-[16.66%] px-4 w-full my-6 md:my-8">{children}</div>
  );
}
