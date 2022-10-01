const WorkingDirectory = require("../models/working-directory");
const GitCommand = require("../models/git-command");

const chai = require('chai');
const expect = chai.expect;

describe("Testing add()", function(){

    it('Should success with exact path_file "views/index.html"', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");

        let git = new GitCommand(wd);
        git.init();

        let path_file = "views/index.html";
        let output = git.add(path_file);

        expect(output).to.equal('Successfully added as index file/s.');
    });

    it('Should failed with missing path_file "views/error404.html"', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");

        let git = new GitCommand(wd);
        git.init();

        let path_file = "views/error404.html";
        let output = git.add(path_file);

        expect(output).to.equal(`Failed to add ${path_file}! File is not modified or missing.`);
    });
    

})
