import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
// #TODO: Add ClerkProvider
import { ClerkProvider } from "@clerk/nextjs/dist/components.server";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
