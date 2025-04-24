import AuthButtonWrapper from "@/app/components/Admin/AuthButton";

export default function AdminTop() {
  return (
    <div className="pt-50 text-center">
      <h1 className="text-5xl font-bold mb-20">Welcome to Admin</h1>
      <AuthButtonWrapper />
    </div>
  );
}
