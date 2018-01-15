import { compose, withHandlers, lifecycle } from 'recompose';
import { withApollo } from 'react-apollo';

export default function withSubscribe(subscriptionDocument, optionsObject) {
  return compose(
    withApollo,
    withHandlers({
      subscribe: ({ client, onResult, ...rest }) => {
        const optionsFn = optionsObject && optionsObject.options;
        return () => {
          client.subscribe({ query: subscriptionDocument, ...optionsFn(rest) }).subscribe({
            next: onResult,
          });
        };
      },
    }),
    lifecycle({
      componentDidMount() {
        return this.props.subscribe();
      },
    }),
  );
}
