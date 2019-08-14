## Contributing to Snippet
Thanks for taking the time to contribute to Snippet! ❤️

Snippet is made to be as community driven as possible, and to help this out, we need the `CONTRIBUTING.md` file to set some ground rules.

### Table Of Contents
- [Contributing](#contributing)
- [Testing](#testing)
- [Adding a Language](#adding-a-language)

## Contributing
On the Snippet GitHub page ([link](https://github.com/opensource-matrix/snippet)), there should be some buttons to the upper right.  They should look similar to this:

![My](/assets/buttons.png)

Click on the `Fork` button.  It will make your own version of the repository, so you can make whatever changes you wish to make.

Once you have made your changes, look for the `New Pull Request` button.  Click it, confirm everything and your changes should be reviewed within the next 48 hours.

## Testing
Testing your contribution to Snippet is simple, run the `npm test` command.
If it exits with code `0`, it's all good to go.  I suggest doing your own tests, because the `test` library was not made to function with all programming languages and scripts included in the Snippet library.

If you don't have `NPM` or `NodeJS` installed, get them from the [NodeJS Website](https://nodejs.org/en/), the first thing you should see on the web page is a download link, get the current version for your system.

## Adding a Snippet
To add a Snippet, open up your file browser and navigate to your Snippet installation path.  Open up the `snippets` folder, then select the folder with the language you want to create a snippet for.

If the language you are looking for doesn't exist, add the folder to the `snippets` folder and call it the name of the said language.  Also see [Adding a Language](#adding-a-language) for implementing it.

Create a file in that folder with the file extension of your language.  Change it to your liking, then take a look at the [Contributing](#contributing) section for some help with deploying your changes.

## Adding a Language
To add a language, make sure you have `NodeJS` installed on your computer.  If you don't, download it from the [NodeJS Website](https://nodejs.org/en/), now let's get started.

Open up the terminal of your choice, and enter this command:
```
node addLanguage.js myAmazingLanguage .myAmazingExtensions .mAE
```

The syntax is built up like this:
```
node addLanguage.js [language name] [language file extensions (seperated by spaces)]
```

## Outro
Good luck with your contributions, developers, I am looking forward to what you all will change on your own versions of Snippet!
