```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
    // This will cause an infinite loop because it modifies the state variable
    // inside the effect that is triggered by changes to state variable
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```