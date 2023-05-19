# swr-sync-state

a small library to wrap SWR, enabling SWR to function as global state manager

## to start

```jsx
npm i swr-sync-state
```

## usage

```jsx
// inside react component
export const SomeComponent = () => {
  const key = 'someKey';
  const state = useSyncSWR(key) ?? 0;

  const incrementHandler = () => {
    setSyncSWR(key, (p) => p + 1);
  };

  return (
    <div>
      <div>Counter : {state}</div>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};
```
