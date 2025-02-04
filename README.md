# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to improper dependency management within the `useEffect` function.

## Bug Description

The `MyComponent` component uses `useEffect` to log the current count and then increment it.  However, because the effect doesn't specify any dependencies, it runs after every render, leading to a continuous cycle of updates.

## Solution

The solution involves correctly specifying the dependency array for `useEffect`. By listing `count` as a dependency, the effect will only run when `count` changes.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the console and the rapidly updating count on the screen.

## How to Fix

1. Refer to the `bugSolution.js` file for the corrected implementation.
2. Note how the dependency array for `useEffect` now includes `count`, preventing the infinite loop.

This example highlights the importance of understanding the dependencies of useEffect for writing efficient and stable React code.