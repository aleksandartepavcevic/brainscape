export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center p-6">
      {children}
    </div>
  );
}
