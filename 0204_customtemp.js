let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "as2-test-lahiru",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: "us-east-1_HdYJb7Znp",
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };
    try {
        let data = await s3.listObjects({
            Bucket: "btbucket.images",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };




    return { "message": "Successfully executed" };
};