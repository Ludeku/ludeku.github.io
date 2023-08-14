const APP_DEPLOYMENT = {
  appName: 'ludeku',
  repo: 'ludeku/ludeku.net',
  dockerImage: 'ludekuhub/website',
  prodBranchName: 'master',
  stageBranchName: 'dev',
  domainName: 'ludeku.net',
  prodDeployLink: 'ludeku.net',
  stageDeployLink: 'dev.ludeku.net',
};

module.exports = async ({ github, context, core }) => {
  if (process.env.GITHUB_HEAD_REF) {
    process.env.GIT_BRANCH = `pr-${context.payload.pull_request.number}`;
  } else {
    process.env.GIT_BRANCH = `${process.env.GITHUB_REF}`.replace(
      'refs/heads/',
      ''
    );
  }
  const getTag = () => `sha-${context.sha.substring(0, 7)}`;

  const GLOBAL_CONFIG = {
    ...APP_DEPLOYMENT,
    tagName: getTag(),
  };

  const PROD_CONFIG = {
    ...GLOBAL_CONFIG,
    branchName: APP_DEPLOYMENT.prodBranchName,
    deployUrl: APP_DEPLOYMENT.prodDeployLink,
    isProd: true,
    isFeatureBranch: false,
    deploymentName: `${APP_DEPLOYMENT.appName}-prd`,
    dataEnv: 'production',
  };

  const STG_CONFIG = {
    ...GLOBAL_CONFIG,
    branchName: APP_DEPLOYMENT.stageBranchName,
    deployUrl: APP_DEPLOYMENT.stageDeployLink,
    isProd: false,
    isFeatureBranch: false,
    deploymentName: `${APP_DEPLOYMENT.appName}-dev`,
    dataEnv: 'staging',
  };

  const PR_CONFIG = () => ({
    ...STG_CONFIG,
    branchName: process.env.GIT_BRANCH,
    deploymentName: `${APP_DEPLOYMENT.appName}-pr-${context.payload.pull_request.number}`,
    isFeatureBranch: true,
    deployUrl: `${GLOBAL_CONFIG.appName}-${process.env.GIT_BRANCH}.${GLOBAL_CONFIG.domainName}`,
  });

  const getConfig = () => {
    const environment =
      [PROD_CONFIG, STG_CONFIG].find(
        (c) => c.branchName === process.env.GIT_BRANCH
      ) || PR_CONFIG();

    return environment;
  };

  const envData = getConfig();

  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const prop in envData) {
    core.exportVariable(`CICD_ENV_${prop}`, envData[prop]);
  }
};
