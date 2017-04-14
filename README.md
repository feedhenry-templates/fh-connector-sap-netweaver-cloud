# FeedHenry SAP Netweaver Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-sap-netweaver-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-sap-netweaver-cloud)

The FeedHenry SAP Netweaver Connector. For more information on SAP Netweaver see: [https://github.com/jdorner/node-sapnwrfc.git](https://github.com/jdorner/node-sapnwrfc.git).

> SAP Netweaver support enabled on a per-customer basis

## Group SAP Netweaver Connector API

### Connection

Open a connection and get Netweaver version

|--------------|------------------|
| Endpoint     | /cloud/netweaver |
| HTTP Method  | POST             |

#### Request (application/json)

##### Body

```json
{
}
```

#### Response 200 (application/json)

##### Body

```json
{
  "ok": "true"
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Unit tests

```shell
npm run unit
```

or

```shell
npm run test
```

### Unit coverage

```shell
npm run coverage
```