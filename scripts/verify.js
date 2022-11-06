import * as worldID from '@worldcoin/id' // If you installed the JS package as a module

worldID.init('world-id-container', {
  debug: true, // to aid with debugging, remove in production
  enable_telemetry: true,
  action_id: 'wid_BPZsRJANxct2cZxVRyh80SFG', // obtain this from developer.worldcoin.org
  signal: 'your_signal',
  on_success: (proof) => console.log(proof),
  on_error: (error) => console.error(error),
})

export default Widget;

