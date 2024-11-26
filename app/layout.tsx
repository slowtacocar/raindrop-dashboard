import type { Metadata } from "next";
import Theme from "@/components/Theme";
import AuthRequired from "@/components/AuthRequired";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/joy";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Alerts from "@/components/Alerts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          <Theme>
            <Alerts>
              <AuthRequired>
                <Navbar />
                <Box p={2} maxWidth="1000px" mx="auto">
                  {children}
                </Box>
              </AuthRequired>
            </Alerts>
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
