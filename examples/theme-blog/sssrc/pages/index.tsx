// @ts-ignore
import React from "react";

function Index() {
  return (
    <>
      <main className="container mx-auto">
        <h1 className="p-2 text-center font-mono">hello unisite</h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Case study
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Index;
