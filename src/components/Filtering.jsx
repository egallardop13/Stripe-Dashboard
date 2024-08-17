import React from "react";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

function Filtering() {
  return (
    <div className="flex">
      <ArrowUpIcon class="h-6 w-6 text-gray-500" />
      <ArrowDownIcon class="h-6 w-6 text-gray-500" />
    </div>
  );
}

export default Filtering;
