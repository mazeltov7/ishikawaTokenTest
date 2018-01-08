const MyToken = artifacts.require('./MyToken.sol');

module.exports = (deployer) => {
	let initialSupply = 50000e18
	deployer.deploy(MyToken, initialSupply, {
		gas: 2000000
	})
}