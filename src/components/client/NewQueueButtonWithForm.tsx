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
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-start w-full md:items-center md:space-y-0 md:flex-row md:justify-between">
        <div className="mb-4 md:mt-0">
          <h1 className="text-gray-800 text-3xl font-semibold dark:text-gray-300">
            Your Queues
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and monitor all your business queues
          </p>
        </div>
        <button
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:cursor-pointer"
          onClick={toggleCreateForm}
        >
          <Plus size={20} className="" />
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
          className="mt-6 w-full max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          role="form"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Create a New Queue
          </h2>
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
          <div className="mb-4">
            <label
              className="block font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
          {/* <section className="mb-4 w-full flex flex-col gap-4 items-center justify-between md:flex-row md:space-x-5"> */}
          <section className="mb-4 w-full gap-7 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
            {/* Max size */}
            <div className="flex w-full flex-col gap-1 items-center justify-center md:gap-4 md:flex-row">
              <label
                className="block whitespace-nowrap font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                      className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

            {/* Expires At */}
            <div className="flex w-full flex-col gap-1 items-center justify-center md:gap-4 md:flex-row">
              <label
                className="block whitespace-nowrap font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                      className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

            {/* Queue prefix */}
            <div className="flex w-full flex-col gap-1 items-center justify-center md:gap-4 md:flex-row">
              <label
                className="block whitespace-nowrap font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                      className="w-full px-3 py-2 uppercase border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

            {/* Is Email Requeired */}
            <div className="flex mx-auto w-fit gap-4 items-center justify-center md:mx-0">
              <label
                className="block whitespace-nowrap font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                      className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
          </section>

          <button className="w-full mt-8 mb-2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Plus size={20} className="inline mr-2" />
            Create Queue
          </button>

          <button
            className="w-full flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white"
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
