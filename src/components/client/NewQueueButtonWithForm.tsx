/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Plus } from "lucide-react";
import React from "react";
import { useForm } from "@tanstack/react-form";
import { NewQueueFormOpts } from "@/utils/formHandler";

const NewQueueButtonWithForm = () => {
  const [isCreateFormOpen, setIsCreateFormOpen] = React.useState(false);
  const form = useForm({
    ...NewQueueFormOpts,
    validators: {
      onSubmit: (values) => {
        // Add your validation logic here
        return values;
      },
    },
  });

  const toggleCreateForm = () => {
    setIsCreateFormOpen((prev) => !prev);
  };

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="mb-4 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-300">
            Your Queues
          </h1>
          <p className="text-sm text-gray-500">
            Manage and monitor all your business queues
          </p>
        </div>
        <button
          className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-blue-700"
          onClick={toggleCreateForm}
        >
          <Plus size={20} />
          <span className="ml-2">Create New Queue</span>
        </button>
      </div>

      {isCreateFormOpen && (
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="mt-6 w-full max-w-3xl rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
          role="form"
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
            Create a New Queue
          </h2>
          <div className="mb-4">
            <label
              className="mb-1 block font-medium text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Queue Name
            </label>
            <form.Field
              name="name"
              validators={{ onChangeAsyncDebounceMs: 300 }}
            >
              {(field) => (
                <>
                  <input
                    type="text"
                    id="name"
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
          <div className="mb-4">
            <label
              className="mb-1 block font-medium text-gray-700 dark:text-gray-300"
              htmlFor="description"
            >
              Description
            </label>
            <form.Field name="description">
              {(field) => (
                <>
                  <textarea
                    id="description"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    rows={3}
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
          {/* <section className="mb-4 w-full flex flex-col gap-4 items-center justify-between md:flex-row md:space-x-5"> */}
          <section className="mb-4 grid w-full grid-cols-1 items-center justify-between gap-7 md:grid-cols-2">
            {/* Max size */}
            <div className="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
              <label
                className="mb-1 block font-medium whitespace-nowrap text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Max size:
              </label>
              <form.Field
                name="maxSize"
                validators={{ onChangeAsyncDebounceMs: 300 }}
              >
                {(field) => (
                  <>
                    <input
                      type="number"
                      id="maxSize"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      min={1}
                      max={1000}
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

            {/* Expires At */}
            <div className="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
              <label
                className="mb-1 block font-medium whitespace-nowrap text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Expires at:
              </label>
              <form.Field
                name="expiresAt"
                validators={{ onChangeAsyncDebounceMs: 300 }}
              >
                {(field) => (
                  <>
                    <input
                      type="date"
                      id="expiresAt"
                      value={field.state.value}
                      onChange={(e) => console.log(e.target.value)}
                      min={1}
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

            {/* Queue prefix */}
            <div className="flex w-full flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
              <label
                className="mb-1 block font-medium whitespace-nowrap text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Queue prefix:
              </label>
              <form.Field
                name="queuePrefix"
                validators={{ onChangeAsyncDebounceMs: 300 }}
              >
                {(field) => (
                  <>
                    <input
                      type="text"
                      id="queuePrefix"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      min={1}
                      onBlur={field.handleBlur}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-800 uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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

            {/* Is Email Requeired */}
            <div className="mx-auto flex w-fit items-center justify-center gap-4 md:mx-0">
              <label
                className="mb-1 block font-medium whitespace-nowrap text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Is email required?:
              </label>
              <form.Field
                name="isEmailRequired"
                validators={{ onChangeAsyncDebounceMs: 300 }}
              >
                {(field) => (
                  <>
                    <input
                      type="checkbox"
                      id="isEmailRequired"
                      checked={field.state.value}
                      onChange={(e) => field.handleChange(e.target.checked)}
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
          </section>

          <button className="mt-8 mb-2 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <Plus size={20} className="mr-2 inline" />
            Create Queue
          </button>

          <button
            className="flex w-full items-center justify-center rounded-lg bg-gray-300 px-4 py-2 font-semibold text-gray-800 transition-colors duration-200 hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
            onClick={() => {
              setIsCreateFormOpen(false);
              form.reset();
            }}
            type="button"
            aria-label="Cancel"
            title="Cancel"
            role="button"
          >
            Cancel
          </button>
        </form>
      )}
    </section>
  );
};

export default NewQueueButtonWithForm;
