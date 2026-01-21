import PurchaseNotification from "./components/purchase-notification";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      {/* Notificaciones de compra */}
      <PurchaseNotification />
    </>
  );
}