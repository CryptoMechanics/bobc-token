
const {
    balance,
    constants,
    expectEvent,
    expectRevert,
    time,
    reverting
} = require('@openzeppelin/test-helpers');
const BN = web3.utils.BN;
const ether = (n) => {
    return new BN(web3.utils.toWei(n, 'ether'));
}
const duration = {
    seconds: function (val) { return val; },
    minutes: function (val) { return val * this.seconds(60); },
    hours: function (val) { return val * this.minutes(60); },
    days: function (val) { return val * this.hours(24); },
    weeks: function (val) { return val * this.days(7); },
    years: function (val) { return val * this.days(365); },
};
const assert = require("chai").assert;


const BOBC = artifacts.require("BOBC");



const { ZERO_ADDRESS } = constants;

contract('BOBC', async (accounts) => {
    before(async () => {
        console.log(`----------BOBC ON BINANCE SMART CHAIN BEP---------`);
        const deployedBOBC = await BOBC.new();
        this.BOBCInstance = deployedBOBC
        const _token = deployedBOBC.address;
        await time.advanceBlock();
        this.latest = await time.latest();

        this.token = _token
        let gasOfdeployedBOBC = await web3.eth.getTransactionReceipt(deployedBOBC.transactionHash);
        console.log(`gas used to create BOBC contract is ${gasOfdeployedBOBC.gasUsed}`);
    })
    this.ownerAccount = accounts[0]

    it('owner account has 667 Million BOBCs at start why? its a FIXED token no minting no burning NOTHING', async () => {
        const balance = (await this.BOBCInstance.balanceOf.call(accounts[0])).toString();
  
        assert.equal(
            balance,
            BN(ether("667000000")).toString(),
            "owner account token is not right"
        );
    });

    it('total supply also should be 667 M', async () => {
        const totalSupply = (await this.BOBCInstance.totalSupply()).toString()
        assert.equal(totalSupply, ether("667000000"), "totalSupply in not 0");
    });
    it('by ERC20 standard it should have a name function publicaly available it is BOBC', async () => {
        const name = await this.BOBCInstance.name()
        assert.equal(name, "BOBC", "returned name is not BOBC");
    });
    it('by ERC20 standard it should have a symbol function publicaly available it is BOBC', async () => {
        const symbol = await this.BOBCInstance.symbol()
        assert.equal(symbol, "BOBC", "returned symbol is not BOBC");
    });
    it('by ERC20 standard it should have a decimals function publicaly available we have 18 same as WEI on ETH', async () => {
        const decimals = await this.BOBCInstance.decimals()
        assert.equal(decimals, 18, "returned decimals is not 18");
    });
})  