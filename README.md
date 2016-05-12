I) Setup Ghost
- Download Ghost from Ghost.org (https://ghost.org/developers/)
- Unzip and copy the contents into your directory and run "npm install --production"
- Run Ghost and create the Administator account .

II) Setup Xena Theme
- Navigate to the content/themes directory and checkout the Xena theme (git clone git@github.com:clevercanary/ucsc-xena-web.git)
- Inside the theme run "npm install" to install the required node packages .
- Go to the Ghost's admin panel , Navigate to the "General" tab and change the theme to Xena .
- Restart Ghost to see the new theme .

III) Running the less watcher using Grunt 
- Within the Xena theme , run "grunt pizza" . (pizza is the name assigned to the current less watcher)