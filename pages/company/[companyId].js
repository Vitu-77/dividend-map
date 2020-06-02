import { withRouter } from 'next/router';

const Company = ({ router }) => (
	<button onClick={() => console.log(router)}>props</button>
);

export default withRouter(Company);
