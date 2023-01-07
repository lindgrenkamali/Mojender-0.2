import { Dispatch, Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const exampleMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (storeMonths) => (next) => (action) => {
  const state = storeMonths.getState(); // correctly typed as RootState
};
