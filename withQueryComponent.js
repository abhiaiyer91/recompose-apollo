import { graphql } from 'react-apollo';

function RenderChild({ data, children }) {
  return children(data);
}

export default function withQueryComponent(queryDocument, optionsObject) {
  const queryData = graphql(queryDocument, optionsObject);
  return queryData(RenderChild);
}
