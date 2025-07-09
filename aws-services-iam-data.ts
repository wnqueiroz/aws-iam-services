// @see https://apps.abacus.ai/chatllm/?appId=161612e9fa&convoId=c2d39cd6f

export interface ServiceData {
  service: string;
  serviceLink: string;
  actions: string;
  resourceLevel: string;
  resourceLevelLink?: string;
  resourceBased: string;
  resourceBasedLink?: string;
  abac: string;
  abacLink?: string;
  temporaryCredentials: string;
  serviceLinkedRoles: string;
  serviceLinkedRolesLink?: string;
}

export const servicesData: ServiceData[] = [
  {
    service: "AWS Account Management",
    serviceLink: "https://docs.aws.amazon.com/accounts/latest/reference/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Activate Console",
    serviceLink: "https://aws.amazon.com/activate/faq/#AWS_Activate_Console",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon AI Operations",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Amplify Admin",
    serviceLink:
      "https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/what-is-admin-ui.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Amplify",
    serviceLink:
      "https://docs.aws.amazon.com/amplify/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Amplify UI Builder",
    serviceLink: "https://docs.aws.amazon.com/amplify/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Apache Kafka APIs for Amazon MSK clusters",
    serviceLink:
      "https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon API Gateway",
    serviceLink:
      "https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/apigateway/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon API Gateway Management",
    serviceLink:
      "https://docs.aws.amazon.com/apigateway/latest/developerguide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon API Gateway Management V2",
    serviceLink:
      "https://docs.aws.amazon.com/apigateway/latest/developerguide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS App Studio",
    serviceLink:
      "https://docs.aws.amazon.com/appstudio/latest/userguide/security",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS App2Container",
    serviceLink:
      "https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS AppConfig",
    serviceLink:
      "https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS AppFabric",
    serviceLink:
      "https://docs.aws.amazon.com/appfabric/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon AppFlow",
    serviceLink:
      "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon AppIntegrations",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/appintegrations-slr.html",
  },
  {
    service: "Application Auto Scaling",
    serviceLink:
      "https://docs.aws.amazon.com/autoscaling/application/userguide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html",
  },
  {
    service: "AWS Application Cost Profiler",
    serviceLink:
      "https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Application Discovery Arsenal",
    serviceLink:
      "https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Application Discovery Service",
    serviceLink:
      "https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/application-discovery/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Application Migration Service",
    serviceLink:
      "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/mgn/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon Application Recovery Controller - Zonal Shift",
    serviceLink:
      "https://docs.aws.amazon.com/r53recovery/latest/dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Application Transformation Service",
    serviceLink:
      "https://docs.aws.amazon.com/microservice-extractor/latest/userguide/microservice-extractor-security.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS App Mesh",
    serviceLink:
      "https://docs.aws.amazon.com/app-mesh/latest/userguide/IAM_policies.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/app-mesh/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS App Mesh Preview",
    serviceLink:
      "https://docs.aws.amazon.com/app-mesh/latest/userguide/what-is-app-mesh.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/app-mesh/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS App Runner",
    serviceLink:
      "https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/apprunner/latest/dg/security-iam-slr.html",
  },
  {
    service: "Amazon AppStream 2.0",
    serviceLink:
      "https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS AppSync",
    serviceLink:
      "https://docs.aws.amazon.com/appsync/latest/devguide/security-authorization-use-cases.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Artifact",
    serviceLink:
      "https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Athena",
    serviceLink:
      "https://docs.aws.amazon.com/athena/latest/ug/security-iam-athena.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Audit Manager",
    serviceLink:
      "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/audit-manager/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Aurora DSQL",
    serviceLink:
      "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-service-linked-roles.html",
  },
  {
    service: "AWS Auto Scaling",
    serviceLink:
      "https://docs.aws.amazon.com/autoscaling/plans/userguide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/autoscaling/plans/userguide/aws-auto-scaling-service-linked-roles.html",
  },
  {
    service: "AWS B2B Data Interchange",
    serviceLink:
      "https://docs.aws.amazon.com/b2bi/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Backup",
    serviceLink:
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/security-considerations.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Backup Gateway",
    serviceLink: "https://docs.aws.amazon.com/aws-backup/latest/devguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Backup Search",
    serviceLink:
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/security-considerations.html#authentication",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Backup storage",
    serviceLink:
      "https://docs.aws.amazon.com/aws-backup/latest/devguide/security-considerations.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Batch",
    serviceLink:
      "https://docs.aws.amazon.com/batch/latest/userguide/IAM_policies.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink:
      "https://docs.aws.amazon.com/batch/latest/userguide/batch-supported-iam-actions-resources.html",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/batch/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Bedrock",
    serviceLink:
      "https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Billing and Cost Management",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ControllingAccessWebsite.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cost-management/latest/userguide/cost-management-SLR.html",
  },
  {
    service: "AWS Billing and Cost Management Data Exports",
    serviceLink:
      "https://docs.aws.amazon.com/cur/latest/userguide/bcm-data-exports-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Billing and Cost Management Pricing Calculator",
    serviceLink:
      "https://docs.aws.amazon.com/cost-management/latest/userguide/pricing-calculator.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Billing Conductor",
    serviceLink:
      "https://docs.aws.amazon.com/billingconductor/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Braket",
    serviceLink:
      "https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/braket/latest/developerguide/braket-slr.html",
  },
  {
    service: "AWS Budget Service",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "No",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS BugBust",
    serviceLink:
      "https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/what-is-bughunt.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Certificate Manager (ACM)",
    serviceLink:
      "https://docs.aws.amazon.com/acm/latest/userguide/authen-toplevel.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/acm/latest/userguide/acm-slr.html",
  },
  {
    service: "Amazon Q Developer in chat applications",
    serviceLink:
      "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/chatbot/latest/adminguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Chime",
    serviceLink:
      "https://docs.aws.amazon.com/chime/latest/ag/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/chime/latest/ag/using-service-linked-roles.html",
  },
  {
    service: "AWS Clean Rooms",
    serviceLink:
      "https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Clean Rooms ML",
    serviceLink:
      "https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Client VPN",
    serviceLink:
      "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-authentication.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/using-service-linked-roles.html",
  },
  {
    service: "AWS Cloud9",
    serviceLink:
      "https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cloud9/latest/user-guide/using-service-linked-roles.html",
  },
  {
    service: "AWS Cloud Control API",
    serviceLink:
      "https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Cloud Directory",
    serviceLink:
      "https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CloudFormation",
    serviceLink:
      "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudFront",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-service-linked-roles.html",
  },
  {
    service: "Amazon CloudFront KeyValueStore",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CloudHSM",
    serviceLink:
      "https://docs.aws.amazon.com/cloudhsm/latest/userguide/prerequisites.html#permissions-for-cloudhsm",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cloudhsm/latest/userguide/service-linked-roles.html",
  },
  {
    service: "AWS Cloud Map",
    serviceLink:
      "https://docs.aws.amazon.com/cloud-map/latest/dg/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudSearch",
    serviceLink:
      "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configureaccess.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CloudShell",
    serviceLink:
      "https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CloudTrail",
    serviceLink:
      "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Partial",
    resourceBasedLink:
      "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS CloudTrail Data",
    serviceLink:
      "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/UsingIAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-service-linked-roles.html",
  },
  {
    service: "Amazon CloudWatch Application Insights",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/appinsights-what-is.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch Application Signals",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch Evidently",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch Internet Monitor",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch Logs",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/auth-and-access-control-cwl.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-identity-based-access-control-cwl.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/using-service-linked-roles-cwl.html",
  },
  {
    service: "Amazon CloudWatch Network Synthetic Monitor",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch Observability Access Manager",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CloudWatch RUM",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-service-linked-roles-RUM.html",
  },
  {
    service: "Amazon CloudWatch Synthetics",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeArtifact",
    serviceLink:
      "https://docs.aws.amazon.com/codeartifact/latest/ug/auth-and-access-control-iam-identity-based-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeBuild",
    serviceLink:
      "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink: "#swwiam_footnotes_codebuild",
    abac: "Partial",
    abacLink: "#swwiam_footnotes_codebuild",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CodeCatalyst",
    serviceLink:
      "https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/codecatalyst/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS CodeCommit",
    serviceLink:
      "https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeConnections",
    serviceLink:
      "https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeDeploy",
    serviceLink:
      "https://docs.aws.amazon.com/codedeploy/latest/userguide/access-permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeDeploy secure host commands service",
    serviceLink:
      "https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon CodeGuru Profiler",
    serviceLink:
      "https://docs.aws.amazon.com/codeguru/latest/profiler-ug/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/codeguru/latest/profiler-ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon CodeGuru Reviewer",
    serviceLink:
      "https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-iam-identity-based-access-control.html#managed-policy-for-codecommit-and-codestar-connections",
  },
  {
    service: "Amazon CodeGuru Security",
    serviceLink:
      "https://docs.aws.amazon.com/codeguru/latest/security-ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodePipeline",
    serviceLink:
      "https://docs.aws.amazon.com/codepipeline/latest/userguide/access-permissions.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeStar",
    serviceLink:
      "https://docs.aws.amazon.com/codestar/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS CodeStar Connections",
    serviceLink:
      "https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/dtconsole/latest/userguide/service-linked-role-connections.html",
  },
  {
    service: "AWS CodeStar Notifications",
    serviceLink:
      "https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/dtconsole/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon CodeWhisperer",
    serviceLink:
      "https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/codewhisperer/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Cognito",
    serviceLink: "https://docs.aws.amazon.com/cognito/latest/developerguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Cognito Sync",
    serviceLink:
      "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sync.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Cognito user pools",
    serviceLink:
      "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Comprehend",
    serviceLink:
      "https://docs.aws.amazon.com/comprehend/latest/dg/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Comprehend Medical",
    serviceLink:
      "https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-med.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Compute Optimizer",
    serviceLink:
      "https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Config",
    serviceLink:
      "https://docs.aws.amazon.com/config/latest/developerguide/recommended-iam-permissions-using-aws-config-console-cli.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_config",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/config/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Connect",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/connect-slr.html",
  },
  {
    service: "Amazon Connect Cases",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/cases.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Connect Customer Profiles",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/customerprofiles-slr.html",
  },
  {
    service: "Amazon Connect Outbound Compaigns",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Connect Voice ID",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/voice-id.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Console Mobile Application",
    serviceLink:
      "https://docs.aws.amazon.com/consolemobileapp/latest/userguide/permissions-policies.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Consolidated Billing",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Control Catalog",
    serviceLink:
      "https://docs.aws.amazon.com/controlcatalog/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Control Tower",
    serviceLink:
      "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Cost and Usage Report",
    serviceLink:
      "https://docs.aws.amazon.com/cur/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Cost Explorer",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Cost Optimization Hub",
    serviceLink:
      "https://docs.aws.amazon.com/cost-management/latest/userguide/cost-optimization-hub.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Customer Verification Service",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Database Migration Service",
    serviceLink:
      "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.IAMPermissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    resourceBasedLink: "#swwiam_footnotes_dms",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/dms/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Database Query Metadata Service",
    serviceLink:
      "https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Data Exchange",
    serviceLink:
      "https://docs.aws.amazon.com/data-exchange/latest/userguide/auth-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/data-exchange/latest/userguide/using-service-linked-roles-adx.html",
  },
  {
    service: "Amazon Data Lifecycle Manager",
    serviceLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Data Pipeline",
    serviceLink:
      "https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-concepts-roles.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS DataSync",
    serviceLink:
      "https://docs.aws.amazon.com/datasync/latest/userguide/iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/datasync/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon DataZone",
    serviceLink:
      "https://docs.aws.amazon.com/datazone/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Deadline Cloud",
    serviceLink:
      "https://docs.aws.amazon.com/deadline-cloud/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS DeepComposer",
    serviceLink:
      "https://docs.aws.amazon.com/deepcomposer/latest/devguide/what-it-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS DeepRacer",
    serviceLink:
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-understand-required-permissions-and-iam-roles.html",
  },
  {
    service: "Amazon Detective",
    serviceLink:
      "https://docs.aws.amazon.com/detective/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Device Farm",
    serviceLink:
      "https://docs.aws.amazon.com/devicefarm/latest/developerguide/permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/devicefarm/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon DevOps Guru",
    serviceLink:
      "https://docs.aws.amazon.com/devops-guru/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/devops-guru/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Diagnostic tools",
    serviceLink:
      "https://docs.aws.amazon.com/ts/latest/diagnostic-tools/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Direct Connect",
    serviceLink:
      "https://docs.aws.amazon.com/directconnect/latest/UserGuide/using_iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/directconnect/latest/UserGuide/using_tags.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/directconnect/latest/UserGuide/using-service-linked-roles.html",
  },
  {
    service: "AWS Directory Service",
    serviceLink:
      "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_policy.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Directory Service Data",
    serviceLink:
      "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_AuthNAccess.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon DocumentDB Elastic Clusters",
    serviceLink:
      "https://docs.aws.amazon.com/documentdb/latest/developerguide/security.IAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/documentdb/latest/developerguide/elastic-service-linked-roles.html",
  },
  {
    service: "Amazon DynamoDB Accelerator (DAX)",
    serviceLink:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon DynamoDB",
    serviceLink:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsingIAMWithDDB.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles-service-linked",
  },
  {
    service: "Amazon Elastic Compute Cloud (Amazon EC2)",
    serviceLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink: "#swwiam_footnotes_ec2",
  },
  {
    service: "Amazon EC2 Auto Scaling",
    serviceLink:
      "https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html",
  },
  {
    service: "EC2 Image Builder",
    serviceLink:
      "https://docs.aws.amazon.com/imagebuilder/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-service-linked-role.html",
  },
  {
    service: "Amazon EC2 Instance Connect",
    serviceLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/eice-slr.html",
  },
  {
    service: "AWS Elastic Beanstalk",
    serviceLink:
      "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.access-tags.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic Block Store (Amazon EBS)",
    serviceLink:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Elastic Container Registry (Amazon ECR)",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonECR/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic Container Registry Public (Amazon ECR Public)",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonECR/latest/public/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Elastic Container Service (Amazon ECS)",
    serviceLink: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_ecs",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Elastic Disaster Recovery",
    serviceLink: "https://docs.aws.amazon.com/drs/latest/userguide/index.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/drs/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic File System (Amazon EFS)",
    serviceLink:
      "https://docs.aws.amazon.com/efs/latest/ug/security-considerations.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Partial",
    abacLink: "https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/efs/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic Kubernetes Service (Amazon EKS)",
    serviceLink:
      "https://docs.aws.amazon.com/eks/latest/userguide/IAM_policies.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/eks/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic Kubernetes Service (Amazon EKS) Auth",
    serviceLink:
      "https://docs.aws.amazon.com/eks/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elastic Load Balancing",
    serviceLink:
      "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/load-balancer-authentication-access-control.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceBased: "No",
    abac: "Partial",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/elb-service-linked-roles.html",
  },
  {
    service: "Amazon Elastic Transcoder",
    serviceLink:
      "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Elastic VMware Service",
    serviceLink:
      "https://docs.aws.amazon.com/evs/latest/userguide/security-iam.html#security-iam-access-manage",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/evs/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon ElastiCache",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/IAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Elemental Appliances and Software Activation Service",
    serviceLink:
      "https://docs.aws.amazon.com/elemental-appliances-software/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental Appliances and Software",
    serviceLink:
      "https://docs.aws.amazon.com/elemental-appliances-software/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental MediaConnect",
    serviceLink:
      "https://docs.aws.amazon.com/mediaconnect/latest/ug/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/mediaconnect/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Elemental MediaConvert",
    serviceLink:
      "https://docs.aws.amazon.com/mediaconvert/latest/ug/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/mediaconvert/latest/ug/example-policies.html#example-policy-tag-based-access-control-using-resource-tags",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental MediaLive",
    serviceLink:
      "https://docs.aws.amazon.com/medialive/latest/ug/setting-up-for-production.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental MediaPackage",
    serviceLink:
      "https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/mediapackage/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Elemental MediaPackage V2",
    serviceLink:
      "https://docs.aws.amazon.com/mediapackage/latest/userguide/setting-up-iam-permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental MediaPackage VOD",
    serviceLink:
      "https://docs.aws.amazon.com/mediapackage/latest/ug/setting-up.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/mediapackage/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Elemental MediaStore",
    serviceLink:
      "https://docs.aws.amazon.com/mediastore/latest/ug/setting-up.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental MediaTailor",
    serviceLink:
      "https://docs.aws.amazon.com/mediatailor/latest/ug/setting-up.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/mediatailor/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Elemental Support Cases",
    serviceLink:
      "https://docs.aws.amazon.com/elemental-appliances-software/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Elemental Support Content",
    serviceLink:
      "https://docs.aws.amazon.com/elemental-appliances-software/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon EMR",
    serviceLink:
      "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/emr/latest/ManagementGuide/using-service-linked-roles.html",
  },
  {
    service: "Amazon EMR on EKS",
    serviceLink:
      "https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/using-service-linked-roles.html",
  },
  {
    service: "Amazon EMR Serverless",
    serviceLink:
      "https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/using-service-linked-roles.html",
  },
  {
    service: "AWS End User Messaging SMS and Voice V2",
    serviceLink:
      "https://docs.aws.amazon.com/sms-voice/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/sms-voice/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS End User Messaging Social",
    serviceLink:
      "https://docs.aws.amazon.com/social-messaging/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/social-messaging/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Entity Resolution",
    serviceLink:
      "https://docs.aws.amazon.com/entityresolution/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon EventBridge",
    serviceLink:
      "https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus-perms.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon EventBridge Pipes",
    serviceLink:
      "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon EventBridge Scheduler",
    serviceLink:
      "https://docs.aws.amazon.com/scheduler/latest/UserGuide/what-is-scheduler.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon EventBridge Schemas",
    serviceLink:
      "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/eventbridge/latest/userguide/resource-based-policies-schemas.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Fault Injection Service",
    serviceLink:
      "https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/fis/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon FinSpace",
    serviceLink:
      "https://docs.aws.amazon.com/finspace/latest/userguide/identity-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/finspace/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon FinSpace API",
    serviceLink:
      "https://docs.aws.amazon.com/finspace/latest/userguide/temporary-credentials.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Firewall Manager",
    serviceLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/fms-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/fms-using-service-linked-roles.html",
  },
  {
    service: "Fleet Hub for AWS IoT Device Management",
    serviceLink:
      "https://docs.aws.amazon.com/iot/latest/fleethubuserguide/what-is-aws-iot-monitor.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Forecast",
    serviceLink:
      "https://docs.aws.amazon.com/forecast/latest/dg/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Fraud Detector",
    serviceLink:
      "https://docs.aws.amazon.com/frauddetector/latest/ug/set-up.html#set-up-iam-admin",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "FreeRTOS",
    serviceLink:
      "https://docs.aws.amazon.com/freertos/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Free Tier",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon FSx",
    serviceLink: "https://docs.aws.amazon.com/fsx/index.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-service-linked-roles.html",
  },
  {
    service: "Amazon GameLift Servers",
    serviceLink:
      "https://docs.aws.amazon.com/gameliftservers/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon GameLift Streams",
    serviceLink:
      "https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Global Accelerator",
    serviceLink:
      "https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/global-accelerator/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "AWS Glue",
    serviceLink:
      "https://docs.aws.amazon.com/glue/latest/dg/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Partial",
    abacLink: "https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Glue DataBrew",
    serviceLink:
      "https://docs.aws.amazon.com/databrew/latest/dg/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Ground Station",
    serviceLink:
      "https://docs.aws.amazon.com/ground-station/latest/ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ground-station/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon Ground Truth Labeling",
    serviceLink: "https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon GuardDuty",
    serviceLink:
      "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/guardduty/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Health APIs And Notifications",
    serviceLink:
      "https://docs.aws.amazon.com/health/latest/ug/controlling-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS HealthImaging",
    serviceLink:
      "https://docs.aws.amazon.com/healthimaging/latest/devguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS HealthLake",
    serviceLink:
      "https://docs.aws.amazon.com/healthlake/latest/devguide/what-is-amazon-health-lake.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS HealthOmics",
    serviceLink:
      "https://docs.aws.amazon.com/omics/latest/dev/what-is-service.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IAM Identity Center",
    serviceLink:
      "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/singlesignon/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "IAM Identity Center Directory",
    serviceLink:
      "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "IAM Identity Center Identity Store",
    serviceLink:
      "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "IAM Identity Center OIDC service",
    serviceLink:
      "https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Identity and Access Management (IAM)",
    serviceLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions-required.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Partial",
    resourceBasedLink: "#swwiam_footnotes_iam",
    abac: "Partial",
    abacLink: "./access_iam-tags.html",
    temporaryCredentials: "Partial",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Identity and Access Management and Access Analyzer",
    serviceLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-permissions",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-using-service-linked-roles.html",
  },
  {
    service: "AWS Identity and Access Management Roles Anywhere",
    serviceLink:
      "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Identity Store Auth",
    serviceLink: "https://docs.aws.amazon.com/singlesignon/latest/userguide/",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Identity Sync",
    serviceLink: "https://docs.aws.amazon.com/singlesignon/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Import/Export",
    serviceLink:
      "https://docs.aws.amazon.com/AWSImportExport/latest/DG/using-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Inspector",
    serviceLink:
      "https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/inspector/latest/user/using-service-linked-roles.html",
  },
  {
    service: "Amazon Inspector Classic",
    serviceLink:
      "https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html",
  },
  {
    service: "Amazon InspectorScan",
    serviceLink:
      "https://docs.aws.amazon.com/inspector/latest/user/security-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Interactive Video Service",
    serviceLink:
      "https://docs.aws.amazon.com/ivs/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ivs/latest/userguide/security-service-linked-roles.html",
  },
  {
    service: "Amazon Interactive Video Service Chat",
    serviceLink:
      "https://docs.aws.amazon.com/ivs/latest/userguide/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Invoicing",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT 1-Click",
    serviceLink:
      "https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Analytics",
    serviceLink:
      "https://docs.aws.amazon.com/iotanalytics/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT",
    serviceLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceLevelLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/action-resources.html",
    resourceBased: "Partial",
    resourceBasedLink: "#swwiam_footnotes_iot",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Core Device Advisor",
    serviceLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Device Tester",
    serviceLink:
      "https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Events",
    serviceLink:
      "https://docs.aws.amazon.com/iotevents/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT FleetWise",
    serviceLink:
      "https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Greengrass",
    serviceLink:
      "https://docs.aws.amazon.com/greengrass/v1/developerguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Greengrass V2",
    serviceLink:
      "https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Jobs DataPlane",
    serviceLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IoT Managed Integrations Service",
    serviceLink:
      "https://docs.aws.amazon.com/iotmanagedintegrations/latest/devguide/what-is-managedintegrations.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/iotmanagedintegrations/latest/devguide/using-service-linked-roles.html",
  },
  {
    service: "AWS IoT SiteWise",
    serviceLink:
      "https://docs.aws.amazon.com/iot-sitewise/latest/userguide/set-up-aws-account.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/iot-sitewise/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS IoT TwinMaker",
    serviceLink: "https://docs.aws.amazon.com/iot-twinmaker/latest/guide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/iot-twinmaker/latest/guide/using-service-linked-roles.html",
  },
  {
    service: "AWS IoT Wireless",
    serviceLink:
      "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS IQ",
    serviceLink:
      "https://docs.aws.amazon.com/aws-iq/latest/experts-user-guide/set-up-expert-account-permissions-to-use-aws-iq.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/aws-iq/latest/user-guide/using-service-linked-roles.html",
  },
  {
    service: "AWS IQ Permissions",
    serviceLink:
      "https://docs.aws.amazon.com/aws-iq/latest/experts-user-guide/set-up-expert-account-permissions-to-use-aws-iq.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Kendra",
    serviceLink:
      "https://docs.aws.amazon.com/kendra/latest/dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Kendra Intelligent Ranking",
    serviceLink:
      "https://docs.aws.amazon.com/kendra/latest/dg/intelligent-rerank.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Key Management Service (AWS KMS)",
    serviceLink:
      "https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/kms/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Keyspaces (for Apache Cassandra)",
    serviceLink:
      "https://docs.aws.amazon.com/keyspaces/latest/devguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/keyspaces/latest/devguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Managed Service for Apache Flink",
    serviceLink:
      "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Managed Service for Apache Flink V2",
    serviceLink:
      "https://docs.aws.amazon.com/kinesisanalytics/latest/dev/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Data Firehose",
    serviceLink:
      "https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Kinesis Data Streams",
    serviceLink:
      "https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Kinesis Video Streams",
    serviceLink:
      "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Lake Formation",
    serviceLink:
      "https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html",
  },
  {
    service: "AWS Lambda",
    serviceLink:
      "https://docs.aws.amazon.com/lambda/latest/dg/lambda-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/lambda/latest/dg/attribute-based-access-control.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html#using-service-linked-roles",
  },
  {
    service: "AWS Launch Wizard",
    serviceLink:
      "https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-security.html#identity-access-management",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Lex",
    serviceLink:
      "https://docs.aws.amazon.com/lex/latest/dg/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/lex/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Lex V2",
    serviceLink: "https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/lexv2/latest/dg/security_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/lexv2/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "AWS License Manager",
    serviceLink:
      "https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/license-manager/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS License Manager Linux Subscriptions Manager",
    serviceLink:
      "https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS License Manager User Subscriptions",
    serviceLink:
      "https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/license-manager/latest/userguide/user-based-subscription-role.html",
  },
  {
    service: "Amazon Lightsail",
    serviceLink: "https://lightsail.aws.amazon.com/ls/docs/all",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_lightsail",
    resourceBased: "No",
    abac: "Partial",
    abacLink: "#swwiam_footnotes_lightsail",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-using-service-linked-roles",
  },
  {
    service: "Amazon Location Service",
    serviceLink:
      "https://docs.aws.amazon.com/location/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Location Service Maps",
    serviceLink:
      "https://docs.aws.amazon.com/location/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Location Service Places",
    serviceLink:
      "https://docs.aws.amazon.com/location/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Location Service Routes",
    serviceLink:
      "https://docs.aws.amazon.com/location/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Lookout for Equipment",
    serviceLink:
      "https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Lookout for Metrics",
    serviceLink:
      "https://docs.aws.amazon.com/lookoutmetrics/latest/dev/lookoutmetrics-welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Lookout for Vision",
    serviceLink:
      "https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Machine Learning",
    serviceLink:
      "https://docs.aws.amazon.com/machine-learning/latest/dg/reference.html#controlling-access-to-amazon-ml-resources-by-using-iam",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Macie",
    serviceLink:
      "https://docs.aws.amazon.com/macie/latest/user/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/macie/latest/user/service-linked-roles.html",
  },
  {
    service: "AWS Mainframe Modernization",
    serviceLink: "https://docs.aws.amazon.com/m2/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/m2/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Mainframe Modernization Application Testing",
    serviceLink: "https://docs.aws.amazon.com/m2/latest/userguide/apptest.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Managed Blockchain",
    serviceLink:
      "https://docs.aws.amazon.com/managed-blockchain/latest/managementguide/managed-blockchain-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Managed Blockchain Query",
    serviceLink:
      "https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Managed Grafana",
    serviceLink:
      "https://docs.aws.amazon.com/grafana/latest/userguide/index.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/grafana/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Managed Service for Prometheus",
    serviceLink:
      "https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Managed Streaming for Apache Kafka (MSK)",
    serviceLink:
      "https://docs.aws.amazon.com/msk/latest/developerguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Partial",
    resourceBasedLink: "#swwiam_footnotes_msk",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/msk/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Managed Streaming for Kafka Connect",
    serviceLink:
      "https://docs.aws.amazon.com/msk/latest/developerguide/msk-connect.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/msk/latest/developerguide/mkc-using-service-linked-roles.html",
  },
  {
    service: "Amazon Managed Workflows for Apache Airflow",
    serviceLink:
      "https://docs.aws.amazon.com/mwaa/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
  },
  {
    service: "AWS Marketplace",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/marketplace-management-portal-user-access.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-using-service-linked-roles.html",
  },
  {
    service: "AWS Marketplace Catalog",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Commerce Analytics",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/commerce-analytics-service.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "No",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Deployment Service",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace-deployment/latest/api-reference/permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Discovery",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-offers-page.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Entitlement Service",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Image Building Service",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/completing-prerequisite-steps.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Management Portal",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/marketplace-management-portal-user-access.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Metering Service",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/metering-service.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Private Marketplace",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Procurement Systems Integration",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-system-integration.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Reporting",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/APIReference/permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Seller Reporting",
    serviceLink:
      "https://docs.aws.amazon.com/marketplace/latest/userguide/reports-and-data-feed.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Marketplace Vendor Insights",
    serviceLink: "https://docs.aws.amazon.com/marketplace",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Mechanical Turk",
    serviceLink:
      "https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkRequester/WhatIs.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon MediaImport",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-user",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "No",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon MemoryDB",
    serviceLink: "https://docs.aws.amazon.com/memorydb/index.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/MemoryDB/latest/devguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Message Delivery Service",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/execute-remote-commands.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Message Gateway Service",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Microservice Extractor for .NET",
    serviceLink:
      "https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Migration Acceleration Program Credits",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Migration Hub",
    serviceLink:
      "https://docs.aws.amazon.com/migrationhub/latest/ug/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/migrationhub/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "AWS Migration Hub Orchestrator",
    serviceLink:
      "https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Migration Hub Refactor Spaces",
    serviceLink:
      "https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Migration Hub Strategy Recommendations",
    serviceLink:
      "https://docs.aws.amazon.com/migrationhub-strategy/latest/userguide/",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/migrationhub-strategy/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Monitron",
    serviceLink:
      "https://docs.aws.amazon.com/Monitron/latest/admin-guide/admin_what-is-monitron.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/Monitron/latest/admin-guide/using-service-linked-roles.html",
  },
  {
    service: "Amazon MQ",
    serviceLink:
      "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Neptune",
    serviceLink:
      "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/neptune/latest/userguide/security-iam-service-linked-roles.html",
  },
  {
    service: "Multi-party approval",
    serviceLink:
      "https://docs.aws.amazon.com/mpa/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Partial",
    abacLink: "#swwiam_footnotes_mpa",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Neptune Analytics",
    serviceLink:
      "https://docs.aws.amazon.com/neptune-analytics/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Network Firewall",
    serviceLink:
      "https://docs.aws.amazon.com/network-firewall/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/network-firewall/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "Network Flow Monitor",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-NetworkFlowMonitor-security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Network Manager",
    serviceLink:
      "https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/vpc/latest/tgw/nm-service-linked-roles.html",
  },
  {
    service: "AWS Network Manager Chat",
    serviceLink:
      "https://docs.aws.amazon.com/vpc/latest/reachability/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Nimble Studio",
    serviceLink:
      "https://docs.aws.amazon.com/nimble-studio/latest/userguide/what-is-nimble-studio.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon One Enterprise",
    serviceLink:
      "https://docs.aws.amazon.com/one-enterprise/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon OpenSearch",
    serviceLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon OpenSearch Ingestion",
    serviceLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-ingestion.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr-osis.html",
  },
  {
    service: "Amazon OpenSearch Serverless",
    serviceLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/security-iam-serverless.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-service-linked-roles.html",
  },
  {
    service: "Amazon OpenSearch Service",
    serviceLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html",
  },
  {
    service: "Oracle Database@AWS",
    serviceLink:
      "https://docs.aws.amazon.com/odb/latest/UserGuide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS OpsWorks",
    serviceLink:
      "https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS OpsWorks Configuration Management",
    serviceLink:
      "https://docs.aws.amazon.com/opsworks/latest/userguide/security-iam-opscm.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Organizations",
    serviceLink:
      "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "No",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs",
  },
  {
    service: "AWS Outposts",
    serviceLink:
      "https://docs.aws.amazon.com/outposts/latest/userguide/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/outposts/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Panorama",
    serviceLink:
      "https://docs.aws.amazon.com/panorama/latest/dev/panorama-permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/panorama/latest/dev/using-service-linked-roles.html",
  },
  {
    service: "AWS Parallel Computing Service",
    serviceLink:
      "https://docs.aws.amazon.com/pcs/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/pcs/latest/userguide/service-linked-roles.html",
  },
  {
    service: "AWS Partner Central account management",
    serviceLink:
      "https://docs.aws.amazon.com/partner-central/latest/getting-started/controlling-access-in-apc-account-management.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Partner Central Selling",
    serviceLink:
      "https://docs.aws.amazon.com/partner-central/latest/APIReference/access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Payment Cryptography",
    serviceLink:
      "https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Payments",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/security-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Performance Insights",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Personalize",
    serviceLink:
      "https://docs.aws.amazon.com/personalize/latest/dg/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Pinpoint",
    serviceLink:
      "https://docs.aws.amazon.com/pinpoint/latest/developerguide/permissions-actions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Pinpoint Email Service",
    serviceLink: "https://docs.aws.amazon.com/pinpoint/latest/developerguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Pinpoint SMS and Voice Service",
    serviceLink: "https://docs.aws.amazon.com/pinpoint/latest/developerguide/",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Polly",
    serviceLink:
      "https://docs.aws.amazon.com/polly/latest/dg/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Price List",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Private 5G",
    serviceLink:
      "https://docs.aws.amazon.com/private-networks/latest/userguide/how-private-5g-works.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Private CA Connector for Active Directory",
    serviceLink:
      "https://docs.aws.amazon.com/privateca/latest/userguide/connector-for-ad.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Private CA Connector for SCEP",
    serviceLink:
      "https://docs.aws.amazon.com/privateca/latest/userguide/connector-for-scep.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Private Certificate Authority (AWS Private CA)",
    serviceLink:
      "https://docs.aws.amazon.com/privateca/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS PrivateLink",
    serviceLink:
      "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Proton",
    serviceLink:
      "https://docs.aws.amazon.com/proton/latest/adminguide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Purchase Orders Console",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-purchaseorders.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Q Business",
    serviceLink:
      "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon Q Business Q Apps",
    serviceLink:
      "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles-qapps.html",
  },
  {
    service: "Amazon Q Developer",
    serviceLink:
      "https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security-iam-service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon Q in Connect",
    serviceLink:
      "https://docs.aws.amazon.com/connect/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Quantum Ledger Database (Amazon QLDB)",
    serviceLink:
      "https://docs.aws.amazon.com/qldb/latest/developerguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon QuickSight",
    serviceLink:
      "https://docs.aws.amazon.com/quicksight/latest/user/managing-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon RDS Data API",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon RDS IAM Authentication",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Recycle Bin",
    serviceLink:
      "https://docs.aws.amazon.com/recyclebin/latest/APIReference/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Redshift",
    serviceLink:
      "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-authentication-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/redshift/latest/mgmt/using-service-linked-roles.html",
  },
  {
    service: "Amazon Redshift Data API",
    serviceLink:
      "https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-authentication-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Redshift Serverless",
    serviceLink:
      "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-serverless.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Rekognition",
    serviceLink:
      "https://docs.aws.amazon.com/rekognition/latest/dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Partial",
    resourceBasedLink: "#swwiam_footnotes_rekognition",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Relational Database Service (Amazon RDS) (",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAM.ServiceLinkedRoles.html",
  },
  {
    service: "AWS re:Post Private",
    serviceLink:
      "https://docs.aws.amazon.com/repostprivate/latest/caguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/repostprivate/latest/caguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Resilience Hub",
    serviceLink:
      "https://docs.aws.amazon.com/resilience-hub/latest/userguide/what-is.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Resource Access Manager (AWS RAM)",
    serviceLink:
      "https://docs.aws.amazon.com/ram/latest/userguide/control-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ram/latest/userguide/security-iam-service-linked-roles.html",
  },
  {
    service: "AWS Resource Explorer",
    serviceLink:
      "https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html",
  },
  {
    service: "AWS Resource Groups",
    serviceLink:
      "https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Partial",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ARG/latest/userguide/security_iam_service-linked-roles.html",
  },
  {
    service: "AWS Resource Groups Tagging API",
    serviceLink:
      "https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon RHEL Knowledgebase Portal",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rhel.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS RoboMaker",
    serviceLink:
      "https://docs.aws.amazon.com/robomaker/latest/dg/what-is-robomaker.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/robomaker/latest/dg/auth-and-access-control.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/robomaker/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Route 53",
    serviceLink:
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Route 53 Domains",
    serviceLink:
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "No",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Route 53 Profiles",
    serviceLink:
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/profiles.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Route 53 Recovery Cluster",
    serviceLink:
      "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Route 53 Recovery Control Config",
    serviceLink:
      "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Route 53 Recovery Readiness",
    serviceLink:
      "https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/r53recovery/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Route 53 Resolver",
    serviceLink:
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/using-service-linked-roles.html",
  },
  {
    service: "Amazon S3 Express",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-access-overview.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon S3 Glacier",
    serviceLink:
      "https://docs.aws.amazon.com/amazonglacier/latest/dev/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
  },
  {
    service: "Amazon S3 Tables",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-setting-up.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon SageMaker AI",
    serviceLink:
      "https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_service-with-iam.html",
  },
  {
    service: "Amazon SageMaker AI data science assistant",
    serviceLink:
      "https://docs.aws.amazon.com/sagemaker-dsa/security-iam-service-with-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon SageMaker AI geospatial capabilities",
    serviceLink:
      "https://docs.aws.amazon.com/sagemaker/latest/dg/geospatial.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon SageMaker AI with MLflow",
    serviceLink:
      "https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-create-tracking-server-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Savings Plans",
    serviceLink:
      "https://docs.aws.amazon.com/savingsplans/latest/userguide/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Secrets Manager",
    serviceLink:
      "https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Security Hub",
    serviceLink:
      "https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/securityhub/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Security Incident Response",
    serviceLink:
      "https://docs.aws.amazon.com/security-ir/latest/userguide/identity-and-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/security-ir/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Security Lake",
    serviceLink:
      "https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/security-lake/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Security Token Service (AWS STS)",
    serviceLink:
      "https://docs.aws.amazon.com/STS/latest/UsingSTS/TokenPermissions.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_sts",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Partial",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Serverless Application Repository",
    serviceLink:
      "https://docs.aws.amazon.com/serverlessrepo/latest/devguide/serverlessrepo-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Service Catalog",
    serviceLink:
      "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/controlling_access.html#slr-appregistry",
  },
  {
    service: "Service Quotas",
    serviceLink:
      "https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Shield",
    serviceLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/shd-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/shd-using-service-linked-roles.html",
  },
  {
    service: "AWS Signer",
    serviceLink:
      "https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Signin",
    serviceLink:
      "https://docs.aws.amazon.com/signin/latest/ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon SimpleDB",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/UsingIAMWithSDB.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Simple Email Service ‐ Mail Manager",
    serviceLink:
      "https://docs.aws.amazon.com/ses/latest/dg/control-user-access.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ses/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Simple Email Service (Amazon SES) v2",
    serviceLink:
      "https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_ses",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Partial",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/ses/latest/dg/using-service-linked-roles.html",
  },
  {
    service: "Amazon Simple Notification Service (Amazon SNS)",
    serviceLink:
      "https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Simple Queue Service (Amazon SQS)",
    serviceLink:
      "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/UsingIAM.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-abac.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Simple Storage Service (Amazon S3)",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "Partial",
    abacLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon Simple Storage Service (Amazon S3) Object Lambda",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Simple Storage Service (Amazon S3) on AWS Outposts",
    serviceLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsServiceLinkedRoles.html",
  },
  {
    service: "Amazon Simple Workflow Service (Amazon SWF)",
    serviceLink:
      "https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS SimSpace Weaver",
    serviceLink: "https://docs.aws.amazon.com/simspaceweaver/latest/userguide/",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Site-to-Site VPN",
    serviceLink:
      "https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-authentication-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/vpn/latest/s2svpn/vpn-service-linked-roles.html",
  },
  {
    service: "AWS Snowball Edge",
    serviceLink:
      "https://docs.aws.amazon.com/snowball/latest/ug/auth-access-control.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Snowball Edge Edge",
    serviceLink:
      "https://docs.aws.amazon.com/snowball/latest/developer-guide/authentication-and-access-control.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Snowball Edge Device Management",
    serviceLink:
      "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/aws-sdm.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS SQL Workbench",
    serviceLink:
      "https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Step Functions",
    serviceLink:
      "https://docs.aws.amazon.com/step-functions/latest/dg/security.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    abacLink:
      "https://docs.aws.amazon.com/step-functions/latest/dg/tag-based-policies.html",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Storage Gateway",
    serviceLink:
      "https://docs.aws.amazon.com/filegateway/latest/files3/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Supply Chain",
    serviceLink:
      "https://docs.aws.amazon.com/aws-supply-chain/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Support",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#accessing-support",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/using-service-linked-roles-sup.html",
  },
  {
    service: "AWS Support App in Slack",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Support Console",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/support-console-access-control.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Support Plans",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/security-support-plans.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Support Recommendations",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/security-support-recommendations.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Sustainability",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/what-is-ccft.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Systems Manager",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Partial",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Systems Manager for SAP",
    serviceLink: "https://docs.aws.amazon.com/systems-manager/index.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Systems Manager GUI Connect",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Systems Manager Incident Manager",
    serviceLink:
      "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/incident-manager/latest/userguide/security_iam_resource-based-policy-examples.html",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/incident-manager/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Systems Manager Incident Manager Contacts",
    serviceLink:
      "https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "Yes",
    resourceBasedLink:
      "https://docs.aws.amazon.com/incident-manager/latest/userguide/security_iam_resource-based-policy-examples.html",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Systems Manager Quick Setup",
    serviceLink:
      "https://docs.aws.amazon.com/systems-manager/latest/userguide/quick-setup-getting-started.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Tag Editor",
    serviceLink:
      "https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Tax Settings",
    serviceLink:
      "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/control-access-billing.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Telco Network Builder",
    serviceLink: "https://docs.aws.amazon.com/tnb/latest/ug/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Textract",
    serviceLink: "https://docs.aws.amazon.com/textract/latest/dg/",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Timestream",
    serviceLink:
      "https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Timestream Influxdb",
    serviceLink:
      "https://docs.aws.amazon.com/timestream/latest/developerguide/security-iam-for-influxdb.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/timestream/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "AWS Tiros API (for Reachability Analyzer)",
    serviceLink:
      "https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "No",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Transcribe",
    serviceLink:
      "https://docs.aws.amazon.com/transcribe/latest/dg/auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Transfer Family",
    serviceLink:
      "https://docs.aws.amazon.com/transfer/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Transform",
    serviceLink:
      "https://docs.aws.amazon.com/transform/latest/userguide/security-iam.html#security_iam_access-manage",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Translate",
    serviceLink:
      "https://docs.aws.amazon.com/translate/latest/dg/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Trusted Advisor",
    serviceLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
    actions: "Partial",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Partial",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/awssupport/latest/user/using-service-linked-roles-ta.html",
  },
  {
    service: "AWS User Notifications",
    serviceLink:
      "https://docs.aws.amazon.com/notifications/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/notifications/latest/userguide/using-service-linked-roles.html",
  },
  {
    service: "AWS User Notifications Contacts",
    serviceLink:
      "https://docs.aws.amazon.com/notifications/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS User Subscriptions",
    serviceLink:
      "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Verified Access",
    serviceLink:
      "https://docs.aws.amazon.com/verified-access/latest/ug/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-create-instance",
    actions: "Yes",
    resourceLevel: "No",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Verified Permissions",
    serviceLink:
      "https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon Virtual Private Cloud (Amazon VPC)",
    serviceLink:
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_IAM.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink: "#swwiam_footnotes_vpc",
    resourceBased: "Partial",
    resourceBasedLink: "#swwiam_footnotes_vpc",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Partial",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/vpc/latest/tgw/service-linked-roles.html",
  },
  {
    service: "Amazon VPC Lattice",
    serviceLink:
      "https://docs.aws.amazon.com/vpc-lattice/latest/ug/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/vpc-lattice/latest/ug/using-service-linked-roles.html",
  },
  {
    service: "Amazon VPC Lattice Services",
    serviceLink:
      "https://docs.aws.amazon.com/vpc-lattice/latest/ug/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS WAF",
    serviceLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/waf-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/using-service-linked-roles.html",
  },
  {
    service: "AWS WAF Classic",
    serviceLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/classic-using-service-linked-roles.html",
  },
  {
    service: "AWS WAF Regional",
    serviceLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-auth-and-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/waf/latest/developerguide/classic-using-service-linked-roles.html",
  },
  {
    service: "AWS Well-Architected Tool",
    serviceLink:
      "https://docs.aws.amazon.com/wellarchitected/latest/userguide/security_iam_service-with-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS Wickr",
    serviceLink:
      "https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon WorkMail",
    serviceLink:
      "https://docs.aws.amazon.com/workmail/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/workmail/latest/adminguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon WorkMail Message Flow",
    serviceLink:
      "https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "No",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon WorkSpaces",
    serviceLink:
      "https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp_iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS WorkSpaces Managed Instances",
    serviceLink:
      "https://docs.aws.amazon.com/workspaces/latest/userguide/workspaces-instances-access-control.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "Amazon WorkSpaces Secure Browser",
    serviceLink:
      "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "Yes",
    serviceLinkedRolesLink:
      "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/using-service-linked-roles.html",
  },
  {
    service: "Amazon WorkSpaces Thin Client",
    serviceLink:
      "https://docs.aws.amazon.com/workspaces-thin-client/latest/ag/security-iam.html",
    actions: "Yes",
    resourceLevel: "Yes",
    resourceBased: "No",
    abac: "Yes",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
  {
    service: "AWS X-Ray",
    serviceLink:
      "https://docs.aws.amazon.com/xray/latest/devguide/xray-permissions.html",
    actions: "Yes",
    resourceLevel: "Partial",
    resourceLevelLink:
      "https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#xray-permissions-resources)",
    resourceBased: "No",
    abac: "Partial",
    abacLink: "#swwiam_footnotes_xray",
    temporaryCredentials: "Yes",
    serviceLinkedRoles: "No",
  },
];

export default servicesData;
