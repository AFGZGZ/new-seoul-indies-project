## INTRO

This is a step by step guide on how to deploy an [Astro](https://astro.build/) website on [Cloudflare Pages](https://www.cloudflare.com/products/pages/) from a Github repository, including [Decap CMS](https://decapcms.org/) for content management and a simple [Cloudflare Worker](https://www.cloudflare.com/products/workers/) + Github Auth for granting access to it.

This setup focus in these main points:

- **Cost 0 solution** - No initial or maintenance fee.

- **Data ownership** - The website and the content are platform agnostic and can be easily moved to other providers.

- **Blazing fast & Reliable** - Astro's no BS architecture + Cloudflare's global infrastructure are a killer combo.

- **Zero maintenance security** - No server vulnerabilities, database injections, and plugin patch fatigue.

- **Effortless workflow** - Automated deployments paired with built-in version control, history tracking, and rollback capabilities.

## CREATING THE GITHUB REPOSITORY

### Creating a Github account

https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github

### Forking the repository

https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo

### Adding Collaborators

https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository

**Only you and the collaborators of the repository will be able to login to the admin part of the site**

## DEPLOY ON CLOUDFLARE

### Creating an account

- Go to the Sign up page https://dash.cloudflare.com/sign-up

- Enter Email and Password.

- Select Create Account.

- Verify your Email address.

### Connecting the github repository and deploying the website

- Login to the Cloudflare dashboard and press **compute** on the build section and choose **'Workers & Pages'**.

- Click on the **'Create application'** buttton.

- At the bottom part click 'Need to use the legacy Pages workflow? **Continue to Pages**'

- Press 'Get Started' on the '**Import an existing Git repository** - Start by importing an existing Git repository' option.

- Press **'Add account'**.

- Login with your Github credentials, accept and authorize access.

- Select the repository that you want to use and click **Begin setup**.

- Select **Astro** in the 'Framework preset' option and click **'Save and Deploy'**.

- When the build and deploy is finished you will see a success message with your temporary url (something lile 'https://...pages.dev/') where you can check everything is working correctly.

For extra guidance, the official documentation can be found here: https://developers.cloudflare.com/pages/

### Connecting the custom domain

https://developers.cloudflare.com/pages/configuration/custom-domains/

## AUTH FOR DECAP

### Creating the worker for the admin auth

- On the Cloudflare dashboard go to 'Workers & Pages' section click **'Create application'**.

- Select the **'Start with Hello World!'** option.

- Click **Deploy**

- Click **'Edit code'**

- Delete all the text from the screen worker.js tab and Copy the content of the **workers.js** file of your repository.

- **Change the line 123** to add your user and repository data from Github to the url.

- Click **Deploy**

### Creating the OAuth token

- Go to Github and click on **Settings**.

- Click **'Developer settings'** (Usually at the end of the menu list).

- Click **OAuth Apps**.

- Click the **'New OAuth App'** button.

- Now lets see the configuration:

| Section                 | Value                       |
| ----------------------- | --------------------------- |
| Application name        | Any title is ok             |
| Homepage URL            | https://yourdomain.com      |
| Application description | Any description is ok       |
| Redirect URIs           | https://yourworker/callback |

- Click **Register application**.

- Next we need to copy the **'Client ID'**

- Click **'Generate a new client secret'**

- Copy the Client secret and store it with the Client ID in a safe place, we will use them in the worker setup.

### Setup the worker secrets

- Select the worker on the 'Workers & Pages' section.

- Go to Settings.

- Click the **'+ Add variable'** button next to 'Runtime variables and secrets'

- Write **GITHUB_CLIENT_ID** for the Key and paste the **Client ID** from before as the value.

- Add another variable pressing the '+ Add' button, this time the key is **GITHUB_CLIENT_SECRET** and the value the **Client secret** that we copied before, mark the value as secret.

- Click **'Add 2 variables and deploy'**

- Go to your website/admin and try to loging using your Github credentials.

### Edit the admin config

- On the repository go to the public folder and open the **config.yml** file.
  
- Click the pencil icon to edit the file.
  
- Change the lines 3 (repo) and 5 (base_url) so they point to your repository and worker.
  
- Commit the changes.

## ADDING CONTENT

**Coming Soon**

## COLLABORATING

**Coming Soon**
