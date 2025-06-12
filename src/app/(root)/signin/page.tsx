/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@/app/contexts/AuthProvider";
import auth from "@/utils/firebase";
import { signInFormOpts } from "@/utils/formHandler";
import { useForm } from "@tanstack/react-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const { signInWithPassword, user, loading: userLoading } = useAuth();
  const form = useForm({
    ...signInFormOpts,
    onSubmit: async (values) => {
      // Handle form submission logic here
      const { email, password } = values.value!;
      signInWithPassword(email, password);
      router.push("/dashboard");
    },
  });

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Redirect after successful sign-in
      router.push("/dashboard"); // Replace with your desired redirect path
    } catch (err: any) {
      console.error("Google Sign-in Error:", err);
      // Handle errors (e.g., user cancels popup, network issues)
      setError(err.message || "An error occurred during Google sign-in.");
    } finally {
      setLoading(false);
    }
  };

  if (!userLoading && user) {
    router.push("/dashboard");
    return <div>Redirecting...</div>;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign In to <span className="text-blue-600">QueueFlow</span>
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <form.Field
              name="email"
              validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="email"
                    id="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <div className="text-red-500 text-sm mt-1">
                      <em role="alert">
                        {field.state.meta.errors.map(
                          (error: any, index: number) => (
                            <span key={index}>
                              {typeof error === "string"
                                ? error
                                : error?.message ?? String(error)}
                            </span>
                          )
                        )}
                      </em>
                    </div>
                  )}
                </>
              )}
            </form.Field>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <form.Field
              name="password"
              validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="password"
                    id="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <div className="text-red-500 text-sm mt-1">
                      <em role="alert">
                        {field.state.meta.errors.map(
                          (error: any, index: number) => (
                            <span key={index}>
                              {typeof error === "string"
                                ? error
                                : error?.message ?? String(error)}
                            </span>
                          )
                        )}
                      </em>
                    </div>
                  )}
                </>
              )}
            </form.Field>
          </div>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={`w-full px-4 py-2 text-white font-semibold rounded-md focus:outline-none ${
                  canSubmit
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                } transition-colors duration-200 hover:cursor-pointer`}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            )}
          </form.Subscribe>
        </form>

        {/* Google login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Or sign in with
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-white w-full dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-md text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 hover:shadow-md focus:outline-none hover:cursor-pointer"
            disabled={loading}
          >
            <Image
              src="/google_icon.png"
              alt="Google Icon"
              className="w-5 h-5"
              width={500}
              height={500}
            />
            {/* <a href="https://brandlogos.net/google-icon-2025-108949.html">Google Tag Manager logo</a> */}
            <h1 className="font-bold text-xl">Google</h1>
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
          Do not already have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-blue-600 text-sm flex items-center justify-center gap-2 hover:underline"
          >
            <ArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
