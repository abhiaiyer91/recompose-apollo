import { branch, renderComponent, withPropsOnChange } from 'recompose';

// Loading States
const initialLoading = (networkStatus) => { return networkStatus === 1; };
const activelyRefetching = (networkStatus) => { return networkStatus === 4; };
const passivelyRefetching = (networkStatus) =>  { return networkStatus === 2 || networkStatus === 6; };
const fetchingMore = (networkStatus) => { return networkStatus === 3; };

// Error States
const hasErrored = (networkStatus) => { return networkStatus === 8; };

export function withLoadingState(Component) {
  return branch(
    ({ networkStatus }) => {
      return initialLoading(networkStatus);
    },
    renderComponent(Component),
    withPropsOnChange(['networkStatus'], ({ networkStatus }) => {
      return {
        activelyRefetching: activelyRefetching(networkStatus),
        passivelyRefetching: passivelyRefetching(networkStatus),
        fetchingMore: fetchingMore(networkStatus),
      };
    })
  );
}

export function withErrorState(Component) {
  return branch(({ networkStatus }) => {
    return hasErrored(networkStatus);
  }, renderComponent(Component));
}
