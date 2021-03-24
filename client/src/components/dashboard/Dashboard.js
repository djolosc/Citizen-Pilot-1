import React from 'react';


const Dashboard = () => {
	return (
		<div>
			<div>
				title goes here
			</div>
			<div>
				<button className='DashButton1'>Alerts</button>
				<button className='DashButton2'>Reports</button>
				<button className='DashButton3'> Public Porposals</button>
				<button className='DashButton4'> Active Porposals</button>
				<button className='DashButton5'> Polling Porposals</button>
				<button className='DashButton6'>Active Polls</button>
			</div>
		</div>
	);
}

export default Dashboard;