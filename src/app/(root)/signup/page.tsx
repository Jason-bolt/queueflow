/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createUserIfNotExists } from "@/actions/fireBaseActions";
import { useAuth } from "@/app/contexts/AuthProvider";
import { auth } from "@/utils/firebase";
import { signUpFormOpts } from "@/utils/formHandler";
import { useForm } from "@tanstack/react-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState<string | null>(null);
  const { signUpWithPassword, loading: userLoading, user } = useAuth();
  const form = useForm({
    ...signUpFormOpts,
    onSubmit: async (values) => {
      // Handle form submission logic here
      const { email, password } = values.value!;
      signUpWithPassword(email, password);
      router.push("/dashboard");
    },
  });

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      createUserIfNotExists(
        result.user.uid || "",
        result.user.email || "",
        result.user.displayName || "",
      );
      console.log("Google Sign-in Result:", result);
      // Redirect after successful sign-in
      // router.push("/dashboard"); // Replace with your desired redirect path
    } catch (err: any) {
      console.error("Google Sign-in Error:", err);
      // TODO: Handle errors (e.g., user cancels popup, network issues)
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
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Sign Up for <span className="text-blue-600">QueueFlow</span>
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
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <div className="mt-1 text-sm text-red-500">
                      <em role="alert">
                        {field.state.meta.errors.map(
                          (error: any, index: number) => (
                            <span key={index}>
                              {typeof error === "string"
                                ? error
                                : (error?.message ?? String(error))}
                            </span>
                          ),
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
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <div className="mt-1 text-sm text-red-500">
                      <em role="alert">
                        {field.state.meta.errors.map(
                          (error: any, index: number) => (
                            <span key={index}>
                              {typeof error === "string"
                                ? error
                                : (error?.message ?? String(error))}
                            </span>
                          ),
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
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <form.Field
              name="confirmPassword"
              validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <div className="mt-1 text-sm text-red-500">
                      <em role="alert">
                        {field.state.meta.errors.map(
                          (error: any, index: number) => (
                            <span key={index}>
                              {typeof error === "string"
                                ? error
                                : (error?.message ?? String(error))}
                            </span>
                          ),
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
                className={`w-full rounded-md px-4 py-2 font-semibold text-white focus:outline-none ${
                  canSubmit
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "cursor-not-allowed bg-gray-400"
                } transition-colors duration-200 hover:cursor-pointer`}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            )}
          </form.Subscribe>
        </form>

        {/* Google login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Or sign up with
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-800 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-50 hover:shadow-md focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            aria-label="Sign up with Google"
            disabled={loading}
          >
            <Image
              src="/google_icon.png"
              alt="Google Icon"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            {/* <a href="https://brandlogos.net/google-icon-2025-108949.html">Google Tag Manager logo</a> */}
            <h1 className="text-xl font-bold">Google</h1>
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:underline"
          >
            <ArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
