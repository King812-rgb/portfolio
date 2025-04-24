import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-5xl font-bold pt-50">Authentication Error</h1>
      <p className="text-2xl m-5">Only admin users can access the pages</p>
      <Link
        href="/"
        className="m-10 cursor-pointer p-3 w-70 bg-gray-900 text-white font-bold rounded-full"
      >
        Back to Home
      </Link>
    </div>
  );
}
