FORMAT: 1A

# FeedHenry SAP Netweaver Connector
[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-sap-netweaver-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-sap-netweaver-cloud)

The FeedHenry SAP Netweaver Connector. For more information on SAP Netweaver see: [https://github.com/jdorner/node-sapnwrfc.git](https://github.com/jdorner/node-sapnwrfc.git).

## Note

SAP Netweaver support enabled on a per-customer basis

# Group SAP Netweaver Connector API

# SAP Netweaver [/cloud/netweaver]

Connection

## SAP Netweaver [POST] 

Open a connection and get Netweaver version

+ Request (application/json)
    + Body
        {
        }

+ Response 200 (application/json)
    + Body
            {
              "ok": "true"
            }
