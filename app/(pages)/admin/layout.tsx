import Header from "@/app/components/Admin/Header";
export default async function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen items-center">
      <Header />
      <main className="pt-20 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}