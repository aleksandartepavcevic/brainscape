export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-6 ">
      {children}
    </div>
  );
}
