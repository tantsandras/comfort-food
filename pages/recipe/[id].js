import { withRouter } from "next/router";

function Recipe({ router: { query } }) {
  const component = JSON.parse(query.object);

  return (
    <div>
      <h1>{query.id}</h1>
      <p>{component.method}</p>
    </div>
  );
}

export default withRouter(Recipe);
