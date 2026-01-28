import { Header } from "@/components/Header";
import SanityProvider from "@/components/SanityProvider";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import { SanityLive } from "@/sanity/lib/live";
import { CartSheet } from "@/components/CartSheet";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SanityProvider>
        <CartStoreProvider>
          <ChatStoreProvider>
            <Header />
            <main>{children}</main>
            <CartSheet />
            <Toaster position="bottom-center" />
            <SanityLive />
          </ChatStoreProvider>
        </CartStoreProvider>
      </SanityProvider>
    </ClerkProvider>
  );
}

export default Layout;
