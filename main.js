var sapnwrfc = require('sapnwrfc');

/*
 Connects to a SAP Netweaver instance - returns the SAP version number on success
 NB - SAP Netweaver support is enabled on a per-customer basis
 */
exports.netweaver = function(params, cb) {
  var conParams = {
    ashost: process.env.SAP_HOST,
    sysid: process.env.SAP_SYSID,
    sysnr: process.env.SAP_SYSNR,
    user: process.env.SAP_USER,
    passwd: process.env.SAP_PASSWORD,
    client: process.env.SAP_CLIENT
  };

  var con = new sapnwrfc.Connection;

  con.Open(conParams, function(err) {
    if (err) {
      return cb(err);
    }
    return cb(null, con.GetVersion());
  });
};