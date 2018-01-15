import { branch, renderComponent, withPropsOnChange } from "recompose";

// Loading States
const initialLoading = networkStatus => networkStatus === 1;
const activelyRefetching = networkStatus => networkStatus === 4;
const passivelyRefetching = networkStatus =>
  networkStatus === 2 || networkStatus === 6;
const fetchingMore = networkStatus => networkStatus === 3;

// Error States
const hasErrored = networkStatus => networkStatus === 8;

export function withLoadingState(Component) {
  return branch(
    ({ networkStatus }) => {
      return initialLoading(networkStatus);
    },
    renderComponent(Component),
    withPropsOnChange(["networkStatus"], ({ networkStatus }) => {
      return {
        activelyRefetching: activelyRefetching(props.networkStatus),
        passivelyRefetching: passivelyRefetching(props.networkStatus),
        fetchingMore: fetchingMore(props.networkStatus)
      };
    })
  );
}

export function withErrorState(Component) {
  return branch(({ networkStatus }) => {
    return hasErrored(networkStatus);
  }, renderComponent(Component));
}
