# Recompose Apollo

a utility belt for higher-order components in `apollo`. Recompose utilities for `react-apollo`.

## Higher-order components

### `withSubscribe()`

```js
withSubscribe(
  subscriptionDocument: DocumentNode,
  optionsObject: { options: (props) => { variables } }
): HigherOrderComponent
```
Create a GraphQL subscription that subscribes on `componentDidMount`. By providing a
`onResult` prop to the Component, every time the subscription yields `next`, `onResult` will be called with the result of the subscription.


### `withLoadingState()`

```js
withLoadingState(
  Component: Function,
): HigherOrderComponent
```

Render a Component if the `networkStatus` from `apollo-client` is loading, otherwise return props for `networkStatus`:

* `activelyRefetching`
* `passivelyRefetching`
* `fetchingMore`

### `withErrorState()`

```js
withErrorState(
  Component: Function,
): HigherOrderComponent
```

Render a Component if the `networkStatus` from `apollo-client` is `error`.
