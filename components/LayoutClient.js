"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
// import { useSession } from "next-auth/react";
import { Crisp } from "crisp-sdk-web";
// import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";
import CustomProvider from "@/redux/provider";
import { Setup } from "./utils";

// All the client wrappers are here (they can't be in server components)
// 1. SessionProvider: Allow the useSession from next-auth (find out if user is auth or not)
// 2. NextTopLoader: Show a progress bar at the top when navigating between pages
// 3. Toaster: Show Success/Error messages anywhere from the app with toast()
// 4. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// 5. CrispChat: Set Crisp customer chat support (see above)
const ClientLayout = ({ children }) => {
  return (
    <>
      <CustomProvider>
        {/* Show a progress bar at the top when navigating between pages */}
        <Setup></Setup>
        <NextTopLoader color={config.colors.main} showSpinner={false} />

        {/* Content inside app/page.js files  */}
        {children}

        {/* Show Success/Error messages anywhere from the app with toast() */}
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />

        {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
        <Tooltip
          id="tooltip"
          className="z-[60] !opacity-100 max-w-sm shadow-lg"
        />

      </CustomProvider>
    </>
  );
};

export default ClientLayout;
