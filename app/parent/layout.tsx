export default function OtherLayout({
  children,
  mymodal,
}: Readonly<{
  children: React.ReactNode;
  mymodal: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {mymodal}
    </>
  );
}
