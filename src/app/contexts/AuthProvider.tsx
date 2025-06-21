/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";

interface IOrgUser {
  id: string;
  organizationId?: string;
  name?: string;
  email: string;
  role?: string;
  priviledges?: string[];
  createdAt: string;
}

interface IOrganizationData {
  id: string;
  name: string;
  email: string;
  multiQueueLimit?: number;
  defaultQueuePrefix?: string;
  subscription?: string;
  createdAt?: string;
}

interface AuthContextType {
  user: User | null;
  orgUser: IOrgUser | null;
  setOrgUser: (orgUser: IOrgUser | null) => void;
  organization: IOrganizationData | null;
  setOrganization: (organization: IOrganizationData | null) => void;
  loading: boolean;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signUpWithPassword: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  orgUser: null,
  setOrgUser: () => {},
  organization: null,
  setOrganization: () => {},
  user: null,
  loading: true,
  signInWithPassword: async () => {},
  signUpWithPassword: async () => {},
  signOutUser: async () => {},
});

import { ReactNode } from "react";
import {
  createUser,
  fetchUser,
  fetchUserOrganization,
} from "@/actions/fireBaseActions";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orgUser, setOrgUser] = useState<IOrgUser | null>(null);
  const [organization, setOrganization] = useState<IOrganizationData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      // Fetch organization and orgUser data when user is authenticated
      const fetchOrgData = async () => {
        const orgUserData = await fetchUser(user.uid);
        const orgData = await fetchUserOrganization(user.uid);
        setOrgUser(orgUserData!);
        setOrganization(orgData!);
      };
      fetchOrgData();
    } else {
      setOrgUser(null);
      setOrganization(null);
    }
  }, [user]);

  const signInWithPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signUpWithPassword = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        createUser(user.user.email || "", user.user.displayName || "");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/signin"); // Redirect to sign-in page after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Only render children after mounted and loading is false
  if (!mounted || loading || !orgUser) {
    console.log("AuthProvider: Loading or not mounted");
    return null; // TODO: Or a spinner
  }

  return (
    <AuthContext.Provider
      value={{
        orgUser,
        setOrgUser,
        organization,
        setOrganization,
        user,
        loading,
        signInWithPassword,
        signUpWithPassword,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// In AuthProvider.tsx
export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export const ClosedRouteToLoggedInUsers = (
  Component: React.ComponentType<any>,
) => {
  return function WrappedComponent(props: any) {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && user) {
        router.push("/dashboard");
      }
    }, [user, loading, router]);

    if (!loading && user) {
      return <div>Redirecting...</div>;
    }
    return <Component {...props} />;
  };
};
