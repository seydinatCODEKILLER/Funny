/* eslint-disable react/prop-types */
import { Clipboard } from "flowbite-react";

const CodeGame = ({ code }) => {
  return (
    <div className="grid w-full max-w-60">
      <div className="relative">
        <label htmlFor="npm-install" className="sr-only">
          Label
        </label>
        <input
          id={code}
          type="text"
          className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={code}
          disabled
          readOnly
        />
        <Clipboard.WithIconText valueToCopy={code} />
      </div>
    </div>
  );
};

export default CodeGame;
