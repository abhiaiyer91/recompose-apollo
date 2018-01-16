import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-apollo';

export default function withQueryData(queryDocument, optionsObject = {}) {
  const flattenKey = (optionsObject && optionsObject.name) || 'data';

  return compose(
    graphql(queryDocument, optionsObject),
    flattenProp(flattenKey)
  );
}
