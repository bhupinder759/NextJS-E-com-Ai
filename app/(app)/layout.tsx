import { Header } from "@/components/Header";
import SanityProvider from "@/components/SanityProvider";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";
import { SanityLive } from "@/sanity/lib/live";
import { CartSheet } from "@/components/CartSheet";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ChatSheet } from "@/components/ChatSheet";
import { AppShell } from "@/components/AppShell";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SanityProvider>
        <CartStoreProvider>
          <ChatStoreProvider>
            <AppShell>
              <Header />
              <main>{children}</main>
            </AppShell>
            <CartSheet />
            <ChatSheet />
            <Toaster position="bottom-center" />
            <SanityLive />
          </ChatStoreProvider>
        </CartStoreProvider>
      </SanityProvider>
    </ClerkProvider>
  );
}

export default Layout;
