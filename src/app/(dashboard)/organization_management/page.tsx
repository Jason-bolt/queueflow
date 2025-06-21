"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { organizationSettingsFormOpts } from "@/utils/formHandler";
import { useForm } from "@tanstack/react-form";
import { useAuth } from "@/app/contexts/AuthProvider";
import {
  createOrganization,
  fetchUserOrganization,
  updateOrganization,
} from "@/actions/fireBaseActions";
import { useRouter } from "next/navigation";

const OrganizationManagement = () => {
  const { organization, setOrganization, orgUser } = useAuth();
  const router = useRouter();

  const form = useForm({
    ...organizationSettingsFormOpts,
    defaultValues: {
      name: organization?.name || "",
      email: organization?.email || "",
      defaultQueuePrefix: organization?.defaultQueuePrefix || "QF", // Optional field
    },
    onSubmit: async (values) => {
      const { name, email, defaultQueuePrefix } = values.value!;
      if (!organization) {
        await createOrganization(name, email, defaultQueuePrefix, orgUser!.id);
        const firestoreOrganization = await fetchUserOrganization(orgUser!.id);
        console.log(
          "🚀 ~ onSubmit: ~ firestoreOrganization:",
          firestoreOrganization,
        );
        if (firestoreOrganization) {
          setOrganization(firestoreOrganization);
        }
        router.push("/dashboard");
      } else {
        // Update existing organization settings
        updateOrganization(name, email, defaultQueuePrefix, organization.id);
        setOrganization({
          ...organization,
          name,
          email,
          defaultQueuePrefix,
        });
      }
    },
  });

  return (
    <section className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      {/* Organization settings form */}
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Organization Settings <span className=""></span>
        </h1>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Organization Name <span className="text-red-500">*</span>
            </label>
            <form.Field
              name="name"
              // validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter organization name"
                    onBlur={field.handleBlur}
                    value={field.state.value.trim()}
                    onChange={(e) => field.handleChange(e.target.value)}
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

          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Organization Email <span className="text-red-500">*</span>
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
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter organization email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
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

          <div className="mb-6">
            <label
              htmlFor="defaultQueuePrefix"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Default Queue Prefix
            </label>
            <form.Field
              name="defaultQueuePrefix"
              validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="text"
                    id="defaultQueuePrefix"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter default queue prefix (optional)"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
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
                {isSubmitting ? (
                  <span className="animate-spin">Saving...</span>
                ) : (
                  "Save Changes"
                )}
              </button>
            )}
          </form.Subscribe>
        </form>
      </div>
    </section>
  );
};

export default OrganizationManagement;
