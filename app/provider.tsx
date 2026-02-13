"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";
import Header from "./_components/Header";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = React.useState();

  const createNewUser = React.useCallback(async () => {
    try {
      const result = await axios.post("/api/user", {});
      setUserDetail(result.data);
    } catch (error) {
      console.error("Failed to create/fetch user:", error);
    }
  }, []);

  React.useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user, createNewUser]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {/* Header / Navbar */}
        <div className="flex flex-col items-center">
          <Header />
        </div>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}
