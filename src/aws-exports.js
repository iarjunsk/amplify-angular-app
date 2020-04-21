const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": "<cognito-user-pool-id>",
    "aws_user_pools_web_client_id": "<client-id>",
    "oauth": {
        "domain": "domain.auth.ap-northeast-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/login",
        "redirectSignOut": "http://localhost:4200/login",
        "responseType": "code"
    }
};


export default awsmobile;