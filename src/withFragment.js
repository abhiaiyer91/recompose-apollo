import { compose, withProps } from 'recompose';
import { withApollo } from 'react-apollo';

export default function withFragment(fragmentDocument, optionsObject) {
  const name = (optionsObject && optionsObject.name) || 'data';
  return compose(
    withApollo,
    withProps(({ client, ...rest }) => {
      const fragment = client.readFragment({
        fragment: fragmentDocument,
        id: optionsObject && optionsObject.getFragmentId(rest),
      });

      return {
        [name]: fragment,
      };
    })
  );
}
