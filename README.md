## Set up Ghost

* Download Ghost from Ghost.org.

    `https://ghost.org/developers/`
    
* Unzip and copy the contents into your directory and run:

    `npm install --production`

* Run Ghost:

    `npm start`


* Create the Administator account.

## Set up Xena Theme

* Navigate to the `content/themes` directory and clone the Xena theme:

    `git clone git@github.com:clevercanary/ucsc-xena-web.git`

* Install the node packages:

    `npm install`

* Go to the Ghost's admin panel, navigate to the `General` tab and change the theme to Xena.

* Restart Ghost to see the new theme.

## Running the Less Watcher Using Grunt

* Within the Xena theme directory, start the less watcher:

    `grunt pizza`


## Creating the zip file to upload to ghost.io
* Within the Xena theme directory, run:

    `grunt dist`

* This will create a file called `xena-ghost-theme.zip` in the current directory.
